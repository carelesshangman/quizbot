const { Client, GatewayIntentBits, Collection, REST, Routes, ButtonInteraction, AttachmentBuilder, EmbedBuilder, ButtonStyle,
    ActionRowBuilder, ButtonBuilder
} = require('discord.js');
const { CronJob } = require('cron');
const { createCanvas, loadImage } = require('canvas');

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;


if (!TOKEN || !CLIENT_ID) {
    console.error("❌ Missing TOKEN or CLIENT_ID in .env file!");
    process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages] });
client.commands = new Collection();

const generateProfileImage = async (user) => {
    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    // Load background image
    const background = await loadImage('sanic.png'); // Replace with your background image
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Load user avatar
    const avatar = await loadImage(user.displayAvatarURL({ format: 'png', size: 256 }));
    const avatarSize = 256;
    const avatarX = (canvas.width - avatarSize) / 2;
    const avatarY = (canvas.height - avatarSize) / 2;

    // Draw avatar with circular clipping
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, avatarSize / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
    ctx.restore();

    return new AttachmentBuilder(canvas.toBuffer(), { name: 'profile.png' });
};

const triviaQuestions = [
    {
        question: "What is Sonic's full name?",
        options: ["Sonic Maurice Hedgehog", "Sonic Miles Prower", "Blue Streak Hedgehog"],
        answer: "Sonic Maurice Hedgehog",
        explanation: "Sonic's middle name, Maurice, was confirmed in the Archie Comics. However, 'Ogilvie' was never officially confirmed in any media.",
        references: ["Archie Sonic the Hedgehog #53 (1997)"],
        color: "#005BE2",
        image: "https://cdn.discordapp.com/attachments/1343613169959960760/1351280482985316405/sonic.png?ex=67d9cd84&is=67d87c04&hm=f00b6b836be7ab42bd111729286624a1574e1fa92010513657c53c5cf3a41b96&"
    },
    {
        question: "Who is Knuckles the last of?",
        options: ["The Echidna Clan", "The Dark Legion", "The Babylon Rogues"],
        answer: "The Echidna Clan",
        explanation: "Knuckles is the last known member of the Echidna Clan, an ancient tribe that once guarded the Master Emerald.",
        references: ["Sonic Adventure (1998)", "Sonic the Hedgehog 3 (1994)"],
        color: "#DC143C",
        image: "https://media.discordapp.net/attachments/1343613169959960760/1351280040553218068/knuckles.png?ex=67d9cd1b&is=67d87b9b&hm=7ef983b883f98dd42c49edbd3a8daa63bbd8b6d6b16c59d9e0e25fff2cad732b&=&format=webp&quality=lossless"
    },
    {
        question: "What is Tails' real first name?",
        options: ["Miles", "Ray", "Charles"],
        answer: "Miles",
        explanation: "Tails' real first name is Miles, as confirmed in various Sonic games and media. 'Tails' is just his nickname.",
        references: ["Sonic the Hedgehog 2 (1992)", "Sonic Adventure (1998)"],
        color: "#FFCC00",
        image: "https://media.discordapp.net/attachments/1343613169959960760/1351280039802703995/tails.png?ex=67d9cd1b&is=67d87b9b&hm=b0c329ba226acf2c36d409afe67bcea8e2f0b73536aa4c326f02708a228f3f6e&=&format=webp&quality=lossless"
    },
    {
        question: "What is Shadow the Hedgehog's famous motto?",
        options: ["I'm the ultimate lifeform!", "Chaos is power!", "You're too slow!"],
        answer: "I'm the ultimate lifeform!",
        explanation: "Shadow refers to himself as 'the ultimate lifeform' due to being created by Dr. Gerald Robotnik.",
        references: ["Sonic Adventure 2 (2001)", "Shadow the Hedgehog (2005)"],
        color: "#2E2E2E",
        image: "https://cdn.discordapp.com/attachments/1343613169959960760/1351284798278078614/shadow.png?ex=67d9d189&is=67d88009&hm=9150f4c95e6908c0350be87fd34c4ad5fd36a435fd39d13c4939fcc53ff4360d&"
    },
    {
        question: "Which group is Rouge the Bat affiliated with?",
        options: ["G.U.N.", "The Chaotix", "The Babylon Rogues"],
        answer: "G.U.N.",
        explanation: "Rouge works as a spy for the Guardian Units of Nations (G.U.N.), a military organization in the Sonic universe.",
        references: ["Sonic Adventure 2 (2001)", "Sonic X (2003)"],
        color: "#800080",
        image: "https://cdn.discordapp.com/attachments/1343613169959960760/1351284868562161664/blinking-rouge-the-bat.gif?ex=67d9d19a&is=67d8801a&hm=b84dfd93e540f36d9a9adeda2900958f1783fc31f050dedeb07d6f4d57eb9e46&"
    },
    {
        question: "What is the name of Amy Rose's signature weapon?",
        options: ["Piko Piko Hammer", "Heartbreaker Mallet", "Rose Crusher"],
        answer: "Piko Piko Hammer",
        explanation: "Amy wields the Piko Piko Hammer, a large yet surprisingly lightweight weapon she uses in combat.",
        references: ["Sonic the Fighters (1996)", "Sonic Adventure (1998)"],
        color: "#FF66B2",
        image: ""
    },
    {
        question: "Which character is a detective and leads the Chaotix?",
        options: ["Espio the Chameleon", "Vector the Crocodile", "Charmy Bee"],
        answer: "Vector the Crocodile",
        explanation: "Vector is the leader of Team Chaotix, a group of private detectives who take on various investigative cases.",
        references: ["Knuckles' Chaotix (1995)", "Sonic Heroes (2003)"],
        color: "#228B22",
        image: ""
    },
    {
        question: "Who is Silver the Hedgehog trying to save the future from?",
        options: ["Iblis", "Dr. Eggman", "Dark Gaia"],
        answer: "Iblis",
        explanation: "Silver's future is devastated by Iblis, a destructive entity that he tries to prevent from being unleashed.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#C0C0C0",
        image: ""
    },
    {
        question: "What is Blaze the Cat's royal title?",
        options: ["Princess", "Queen", "Guardian"],
        answer: "Princess",
        explanation: "Blaze is the princess and protector of the Sol Dimension, where she guards the Sol Emeralds.",
        references: ["Sonic Rush (2005)", "Sonic Rush Adventure (2007)"],
        color: "#9932CC",
        image: ""
    },
    {
        question: "Which character was originally created as a joke but became an official part of Sonic lore?",
        options: ["Big the Cat", "Fang the Sniper", "Bean the Dynamite"],
        answer: "Big the Cat",
        explanation: "Big was created as a humorous character but became a recurring part of the Sonic franchise.",
        references: ["Sonic Adventure (1998)", "Sonic Heroes (2003)"],
        color: "#9370DB",
        image: ""
    },
    {
        question: "Who is the leader of the Babylon Rogues?",
        options: ["Jet the Hawk", "Wave the Swallow", "Storm the Albatross"],
        answer: "Jet the Hawk",
        explanation: "Jet is the self-proclaimed 'Legendary Wind Master' and the leader of the Babylon Rogues, an air-riding gang.",
        references: ["Sonic Riders (2006)"],
        color: "#008000",
        image: ""
    },
    {
        question: "What does Dr. Eggman want to build?",
        options: ["Eggmanland", "Robotropolis", "Metropolis Zone"],
        answer: "Eggmanland",
        explanation: "Eggman dreams of creating 'Eggmanland,' a city dedicated to his rule and mechanical designs.",
        references: ["Sonic Unleashed (2008)"],
        color: "#FF0000",
        image: ""
    },
    {
        question: "Which ancient race created the Chaos Emeralds?",
        options: ["The Echidnas", "The Black Arms", "The Babylonians"],
        answer: "The Echidnas",
        explanation: "The ancient Echidnas of the Sonic world were the original protectors of the Chaos Emeralds.",
        references: ["Sonic Adventure (1998)", "Sonic Chronicles: The Dark Brotherhood (2008)"],
        color: "#8B0000",
        image: ""
    },
    {
        question: "Who was Mephiles the Dark a part of before he split?",
        options: ["Solaris", "Dark Gaia", "Chaos"],
        answer: "Solaris",
        explanation: "Mephiles was one half of Solaris, the sun god of Soleanna, before being separated into his own entity.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#4B0082",
        image: ""
    },
    {
        question: "What is the name of Sonic's home planet?",
        options: ["Mobius", "Earth", "Little Planet"],
        answer: "Mobius",
        explanation: "In the Archie Comics and older media, Sonic's world was called Mobius, though newer games suggest it's simply Earth.",
        references: ["Adventures of Sonic the Hedgehog (1993)", "Archie Sonic the Hedgehog (1992)"],
        color: "#1E90FF",
        image: "https://cdn.discordapp.com/attachments/1343613169959960760/1351280482985316405/sonic.png?ex=67d9cd84&is=67d87c04&hm=f00b6b836be7ab42bd111729286624a1574e1fa92010513657c53c5cf3a41b96&"
    }
];

const getTriviaEmbed = (questionData) => {

    let embed = null;
    if (!questionData.image || questionData.image === "") {
        embed = new EmbedBuilder()
            .setTitle("Sonic Trivia! (no photo yet 🖕)")
            .setDescription(questionData.question)
            .setColor(questionData.color)
    }
    else{
        embed = new EmbedBuilder()
        .setTitle("Sonic Trivia!")
        .setDescription(questionData.question)
        .setColor(questionData.color)
        .setImage(questionData.image);
        //.setThumbnail(questionData.image);
        }
    return embed;
};

const getTriviaButtons = (questionData) => {
    return new ActionRowBuilder().addComponents(
        questionData.options.map((option, index) =>
            new ButtonBuilder()
                .setCustomId(`trivia_${index}`)
                .setLabel(option)
                .setStyle(ButtonStyle.Primary)
        )
    );
};

// Register Commands
const commands = [
    {
        name: 'register',
        description: 'Register a new user',
        execute: async (interaction) => {
            const image = await generateProfileImage(interaction.user);
            await interaction.reply({ content: 'You are now registered!', files: [image], ephemeral: true });
        }
    },
    {
        name: 'profile',
        description: 'View your profile',
        execute: async (interaction) => {
            await interaction.reply({ content: 'Here is your profile.', ephemeral: true });
        }
    },
    {
        name: 'quiz',
        description: 'Test your Sonic knowledge!',
        execute: async (interaction) => {
            const questionData = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
            const embed = getTriviaEmbed(questionData);
            const buttons = getTriviaButtons(questionData);

            await interaction.reply({ embeds: [embed], components: [buttons], ephemeral: true });
            client.triviaSessions.set(interaction.user.id, questionData);
        }
    }
];

commands.forEach(cmd => client.commands.set(cmd.name, cmd));

// const deployCommands = async () => {
//     try {
//         console.log("🌐 Registering commands...");
//         const rest = new REST({ version: '10' }).setToken(TOKEN);
//         await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
//         console.log("✅ Commands registered globally!");
//     } catch (error) {
//         console.error("❌ Error registering commands:", error);
//     }
// };

const deployCommands = async () => {
    try {
        const GUILD_ID = '1233574240511594587'; // Your target guild ID
        console.log(`🌐 Registering commands for guild ${GUILD_ID}...`);

        const rest = new REST({ version: '10' }).setToken(TOKEN);
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

        console.log("✅ Commands registered for the specific guild!");
    } catch (error) {
        console.error("❌ Error registering commands:", error);
    }
};


// Handle Slash Commands
client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (command) {
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(`❌ Error executing /${interaction.commandName}:`, error);
                await interaction.reply({ content: '⚠️ An error occurred while executing this command.', ephemeral: true });
            }
        }
    } else if (interaction.isButton()) {
        handleButtonInteraction(interaction);
    }
});

// Handle Button Events
const handleButtonInteraction = async (interaction) => {
    if (interaction.customId.startsWith("trivia_")) {
        const questionData = client.triviaSessions.get(interaction.user.id);
        if (!questionData) return;

        const selectedIndex = parseInt(interaction.customId.split("_")[1]);
        const selectedAnswer = questionData.options[selectedIndex];
        const isCorrect = selectedAnswer === questionData.answer;

        const embed = getTriviaEmbed(questionData)
            .setDescription(`**${questionData.question}**\n\nYour Answer: ${selectedAnswer}\n\n${isCorrect ? "✅ Correct!" : `❌ Wrong! The correct answer was: ${questionData.answer}`}`)
            .addFields(
                { name: "Explanation", value: questionData.explanation },
                { name: "References", value: questionData.references.join("\n") }
            );

        await interaction.update({ embeds: [embed], components: [] });
        client.triviaSessions.delete(interaction.user.id);
    }
};

// Send a Direct Message via Cron Job
const sendDMJob = new CronJob('0 12 * * *', async () => {  // Runs every day at noon
    const userId = process.env.TARGET_USER_ID;
    if (!userId) return;
    try {
        const user = await client.users.fetch(userId);
        await user.send("📩 This is your scheduled daily message!");
        console.log(`✅ Sent DM to ${user.username}`);
    } catch (error) {
        console.error("❌ Failed to send DM:", error);
    }
}, null, true, 'UTC');

client.once('ready', async () => {
    console.log(`🤖 Logged in as ${client.user.tag}!`);
    await deployCommands();
    sendDMJob.start();
    console.log("🎯 DM Cron job scheduled!");
});

client.login(TOKEN);