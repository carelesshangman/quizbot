const { Client, GatewayIntentBits, Collection, REST, Routes, ButtonInteraction, AttachmentBuilder, EmbedBuilder, ButtonStyle,
    ActionRowBuilder, ButtonBuilder
} = require('discord.js');
const { CronJob } = require('cron');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const REGISTERED_USERS_FILE = path.join(__dirname, 'registered_users.csv');
const USER_SCORES_FILE = path.join(__dirname, 'user_scores.csv');
const SLOVENIA_TIMEZONE = 'Europe/Ljubljana';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages] });
client.commands = new Collection();

const triviaQuestionsSonic = require('./sonic_quiz.js');

const getTriviaEmbed = (questionData) => {
    return new EmbedBuilder()
        .setTitle("Sonic Trivia!")
        .setDescription(questionData.question)
        .setColor(questionData.color);
};

const getTriviaButtons = (questionData) => {
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);
    return new ActionRowBuilder().addComponents(
        shuffledOptions.map((option, index) =>
            new ButtonBuilder()
                .setCustomId(`trivia_${index}`)
                .setLabel(option)
                .setStyle(ButtonStyle.Primary)
        )
    );
};

const readCSV = (filePath) => {
    if (!fs.existsSync(filePath)) return [];
    return fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line.trim());
};

const writeCSV = (filePath, data) => {
    fs.writeFileSync(filePath, data.join('\n'));
};

const registerUser = async (interaction) => {
    const userId = interaction.user.id;
    const registeredUsers = readCSV(REGISTERED_USERS_FILE);

    if (registeredUsers.includes(userId)) {
        return interaction.reply({ content: "✅ You are already registered!", ephemeral: true });
    }

    registeredUsers.push(userId);
    writeCSV(REGISTERED_USERS_FILE, registeredUsers);

    return interaction.reply({ content: "🎉 You are now registered for daily Sonic trivia!", ephemeral: true });
};

const unregisterUser = async (interaction) => {
    const userId = interaction.user.id;
    const registeredUsers = readCSV(REGISTERED_USERS_FILE);

    if (!registeredUsers.includes(userId)) {
        return interaction.reply({ content: "❌ You are not registered for daily trivia.", ephemeral: true });
    }

    const updatedUsers = registeredUsers.filter(id => id !== userId);
    writeCSV(REGISTERED_USERS_FILE, updatedUsers);

    return interaction.reply({ content: "👋 You have been unregistered from daily Sonic trivia.", ephemeral: true });
};

let globalQuestionData = null;

const sendDailyQuiz = async () => {
    const registeredUsers = readCSV(REGISTERED_USERS_FILE);
    const questionData = triviaQuestionsSonic[Math.floor(Math.random() * triviaQuestionsSonic.length)];
    globalQuestionData = questionData;

    for (const userId of registeredUsers) {
        try {
            const user = await client.users.fetch(userId);
            const embed = getTriviaEmbed(questionData);
            const buttons = getTriviaButtons(questionData);
            await user.send({ embeds: [embed], components: [buttons] });
        } catch (error) {
            console.error(`❌ Failed to send quiz to ${userId}:`, error);
        }
    }
};

// Define the profile command
const profile = async (interaction) => {
    const userId = interaction.user.id;
    const user = interaction.user;

    // Check if user is registered
    const registeredUsers = readCSV(REGISTERED_USERS_FILE);
    if (!registeredUsers.includes(userId)) {
        return interaction.reply({
            content: "❌ You need to register for Sonic Trivia first! Use `/register` to join.",
            ephemeral: true
        });
    }

    // Get user profile data
    const profileData = getUserProfileData(userId);

    // Get global ranking
    const ranking = getGlobalRanking(userId);

    // Generate fun fact based on streak
    const funFact = generateFunFact(profileData.currentStreak);

    // Create embed
    const embed = new EmbedBuilder()
        .setTitle(`${user.displayName}'s Sonic Trivia Profile`)
        .setColor('#1E90FF')
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .addFields(
            { name: '📊 Score', value: `${profileData.currentScore} points`, inline: true },
            { name: '🏆 Global Rank', value: `#${ranking}`, inline: true },
            { name: '🔥 Current Streak', value: `${profileData.currentStreak} days`, inline: true },
            { name: '⭐ Best Streak', value: `${profileData.biggestStreak} days`, inline: true },
            { name: '📅 Registered', value: `<t:${Math.floor(profileData.registrationDate / 1000)}:R>`, inline: true },
            { name: '✓ Completion Rate', value: `${calculateCompletionRate(profileData)}%`, inline: true },
            { name: '🦔 Fun Fact', value: funFact }
        )
        .setFooter({ text: 'Keep answering daily trivia to improve your stats!' })
        .setTimestamp();

    return interaction.reply({ embeds: [embed] });
};

// Function to get user profile data
const getUserProfileData = (userId) => {
    const profiles = readProfilesCSV();
    let profile = profiles.find(p => p.userId === userId);

    if (!profile) {
        // Create new profile if not found
        profile = {
            userId: userId,
            currentScore: 0,
            biggestStreak: 0,
            currentStreak: 0,
            registrationDate: Date.now(),
            completedDates: [],
            failedDates: []
        };

        // Save new profile
        saveProfileData(profile);
    }

    return profile;
};

// Read profiles CSV
const readProfilesCSV = () => {
    const PROFILES_FILE = path.join(__dirname, 'user_profiles.csv');
    if (!fs.existsSync(PROFILES_FILE)) {
        fs.writeFileSync(PROFILES_FILE, 'userId,currentScore,biggestStreak,currentStreak,registrationDate,completedDates,failedDates');
        return [];
    }

    const lines = fs.readFileSync(PROFILES_FILE, 'utf8').split('\n').filter(line => line.trim());
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');
        const profile = {};

        headers.forEach((header, index) => {
            if (header === 'completedDates' || header === 'failedDates') {
                profile[header] = values[index] ? values[index].split(';') : [];
            } else if (header === 'currentScore' || header === 'biggestStreak' || header === 'currentStreak') {
                profile[header] = parseInt(values[index] || '0');
            } else if (header === 'registrationDate') {
                profile[header] = parseInt(values[index] || Date.now());
            } else {
                profile[header] = values[index];
            }
        });

        return profile;
    });
};

// Save profile data
const saveProfileData = (profileData) => {
    const PROFILES_FILE = path.join(__dirname, 'user_profiles.csv');
    const profiles = readProfilesCSV();

    // Update or add profile
    const existingIndex = profiles.findIndex(p => p.userId === profileData.userId);
    if (existingIndex >= 0) {
        profiles[existingIndex] = profileData;
    } else {
        profiles.push(profileData);
    }

    // Convert to CSV format
    const headers = ['userId', 'currentScore', 'biggestStreak', 'currentStreak', 'registrationDate', 'completedDates', 'failedDates'];
    const csvLines = [
        headers.join(','),
        ...profiles.map(profile => {
            return headers.map(header => {
                if (header === 'completedDates' || header === 'failedDates') {
                    return profile[header].join(';');
                } else {
                    return profile[header];
                }
            }).join(',');
        })
    ];

    fs.writeFileSync(PROFILES_FILE, csvLines.join('\n'));
};

// Get global ranking
const getGlobalRanking = (userId) => {
    const profiles = readProfilesCSV();

    // Sort profiles by score (descending)
    const sortedProfiles = [...profiles].sort((a, b) => b.currentScore - a.currentScore);

    // Find user's rank
    const rank = sortedProfiles.findIndex(p => p.userId === userId) + 1;
    return rank || profiles.length;
};

// Calculate completion rate
const calculateCompletionRate = (profileData) => {
    const total = profileData.completedDates.length + profileData.failedDates.length;
    if (total === 0) return 0;

    return Math.round((profileData.completedDates.length / total) * 100);
};

function sonicLapsAroundEarth(days) {
    const sonicSpeed = 1225;
    const hoursPerDay = 24;
    const earthCircumference = 40075;

    const laps = (sonicSpeed * hoursPerDay * days) / earthCircumference;
    return laps.toFixed(2);
}

// Generate fun fact based on streak
const generateFunFact = (streak) => {
    const facts = [
        `If Sonic had the same amount of rings as your daily streak (${streak}), he'd be ${streak === 0 ? "dead!" : "just getting started!"}`,
        `Your streak of ${streak} is ${streak > 10 ? "more impressive than" : "working towards matching"} Knuckles' ${streak > 10 ? "dedication!" : "guardian duty!"}`,
        `With ${streak} correct answers, you've collected ${streak} Chaos Emerald${streak !== 1 ? "s" : ""}! ${streak >= 7 ? "You can now go Super!" : `Only ${7 - streak} more to go!`}`,
        `Dr. Eggman would need ${streak} more robots to stand a chance against your trivia knowledge!`,
        `Your ${streak} day streak is ${streak > 5 ? "faster than" : "not quite as fast as"} Sonic's top speed!`,
        `${streak} days? Sonic has barely stretched his legs! He’s only made it around the Earth ${sonicLapsAroundEarth(streak)} times. Step it up!`
    ];

    const mockingFacts = [
        `🥚 A ${streak}-day streak? Even Big the Cat has better luck catching Froggy than that!`,
        `🥚 With just ${streak} days, you're making even Eggman’s robots look more reliable!`,
        `🥚 Your streak is at ${streak}... Tails' dummy ring bombs last longer than that!`,
        `🥚 Only ${streak} days? Even Orbot and Cubot have a better success rate!`,
        `🥚 With a streak of ${streak}, you're barely keeping up with a Chao in a slow race!`,
        `🥚 Even a Motobug lasts longer in Green Hill Zone than your ${streak}-day streak!`,
        `🥚 Your streak is at ${streak}? Even Eggman’s plans take longer to fail!`,
    ];


    // Return random fact
    if (streak <= 2 && Math.floor(Math.random() * 10) === 6 ){
        return mockingFacts[Math.floor(Math.random() * mockingFacts.length)];
    }
    return facts[Math.floor(Math.random() * facts.length)];
};

// Update the updateUserScore function to update profile data
const updateUserScore = (userId, isCorrect = true) => {
    // Get profile data
    const profileData = getUserProfileData(userId);
    const today = new Date().toISOString().slice(0, 10);

    if (isCorrect) {
        // Update score
        profileData.currentScore++;

        // Update streak
        profileData.currentStreak++;
        if (profileData.currentStreak > profileData.biggestStreak) {
            profileData.biggestStreak = profileData.currentStreak;
        }

        // Add to completed dates
        if (!profileData.completedDates.includes(today)) {
            profileData.completedDates.push(today);
        }
    } else {
        // Reset streak on wrong answer
        profileData.currentStreak = 0;

        // Add to failed dates
        if (!profileData.failedDates.includes(today)) {
            profileData.failedDates.push(today);
        }
    }

    // Save profile data
    saveProfileData(profileData);
};

// Modify handleButtonInteraction to update score based on answer correctness
const handleButtonInteraction = async (interaction) => {
    if (interaction.customId.startsWith("trivia_")) {
        const questionData = globalQuestionData;
        if (!questionData) {
            await interaction.reply({ content: "⚠️ No active trivia question found.", ephemeral: true });
            return;
        }

        const selectedAnswer = interaction.component.label;
        const isCorrect = selectedAnswer === questionData.answer;

        // Update user score
        updateUserScore(interaction.user.id, isCorrect);

        const embed = getTriviaEmbed(questionData)
            .setDescription(`**${questionData.question}**\n\nYour Answer: ${selectedAnswer}\n\n${isCorrect ? "✅ Correct!" : `❌ Wrong! The correct answer was: ${questionData.answer}`}`)
            .addFields(
                { name: "Explanation", value: questionData.explanation },
                { name: "References", value: questionData.references.join("\n") }
            );

        await interaction.update({ embeds: [embed], components: [] });
    }
};

const commands = [
    { name: 'register', description: 'Register for daily trivia', execute: registerUser },
    { name: 'unregister', description: 'Unregister from daily trivia', execute: unregisterUser },
    { name: 'profile', description: 'View your Sonic Trivia profile and stats', execute: profile }
];

commands.forEach(cmd => client.commands.set(cmd.name, cmd));

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (command) await command.execute(interaction);
    }
    else if (interaction.isButton()) {
        await handleButtonInteraction(interaction);
    }
});

const sendDMJob = new CronJob('0 13 * * *', sendDailyQuiz, null, true, SLOVENIA_TIMEZONE);
//const sendDMJob = new CronJob('* * * * *', sendDailyQuiz, null, true, SLOVENIA_TIMEZONE);

client.once('ready', async () => {
    console.log(`🤖 Logged in as ${client.user.tag}!`);
    await client.application.commands.set(commands);
    sendDMJob.start();

    const guild = client.guilds.cache.get('1233574240511594587');
    if (!guild) {
        console.log("❌ Bot is not in the specified guild.");
        return;
    }

    await guild.commands.set(commands);
    console.log("✅ Guild-specific commands registered!");
});

client.login(process.env.TOKEN);

//TODO: add disclaimer for users that some info might be incorrect, add a report button and add it to msg server
//TODO: add scoreboard
//TODO: add photos and questions
//TODO: add system that checks if user is in game
//TODO: add system that removes embed colors when they could hint the answer