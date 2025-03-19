const triviaQuestionsSonic = [
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
    },
    {
        question: "Which villain was created through a clone of Shadow?",
        options: ["Metal Sonic", "Mephiles the Dark", "Black Doom"],
        answer: "Mephiles the Dark",
        explanation: "Mephiles was created when Solaris was split into two parts. He took Shadow's form after being released from the Scepter of Darkness.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#4B0082",
        image: ""
    },
    {
        question: "What is the name of Eggman's grandfather?",
        options: ["Gerald Robotnik", "Ivo Robotnik Sr.", "Julian Robotnik"],
        answer: "Gerald Robotnik",
        explanation: "Professor Gerald Robotnik was a brilliant scientist who created Shadow the Hedgehog and was the grandfather of Dr. Eggman.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#708090",
        image: ""
    },
    {
        question: "Which character is known as the 'Ultimate Life Form'?",
        options: ["Shadow the Hedgehog", "Sonic the Hedgehog", "Silver the Hedgehog"],
        answer: "Shadow the Hedgehog",
        explanation: "Shadow was created by Gerald Robotnik as the 'Ultimate Life Form', designed to be immortal and possess incredible powers.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#2E2E2E",
        image: ""
    },
    {
        question: "What color are the Chaos Emeralds?",
        options: ["Seven different colors", "All green", "All clear crystal"],
        answer: "Seven different colors",
        explanation: "The seven Chaos Emeralds are red, blue, green, yellow, cyan, purple, and white/gray.",
        references: ["Sonic the Hedgehog series"],
        color: "#00BFFF",
        image: ""
    },
    {
        question: "Who is the main antagonist in Sonic Adventure?",
        options: ["Chaos", "Metal Sonic", "Perfect Chaos"],
        answer: "Chaos",
        explanation: "Chaos, the God of Destruction, was the primary antagonist in Sonic Adventure before transforming into Perfect Chaos at the end.",
        references: ["Sonic Adventure (1998)"],
        color: "#00CED1",
        image: ""
    }
];

module.exports = triviaQuestionsSonic;