const triviaQuestionsSonic = [
    {
        question: "What is Sonic's full name?",
        options: ["Sonic Maurice Hedgehog", "Sonic Miles Prower", "Blue Streak Hedgehog"],
        answer: "Sonic Maurice Hedgehog",
        explanation: "Sonic's middle name, Maurice, was confirmed in the Archie Comics. However, 'Ogilvie' was never officially confirmed in any media.",
        references: ["Archie Sonic the Hedgehog #53 (1997)"],
        color: "#005BE2",
        image: "https://cdn.discordapp.com/attachments/1343613169959960760/1351280482985316405/sonic.png?ex=67d9cd84&is=67d87c04&hm=f00b6b836be7ab42bd111729286624a1574e1fa92010513657c53c5cf3a41b96&",
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
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352493866623959121/latest.png?ex=67de3791&is=67dce611&hm=eb0bcb72025555c2b1d7aee18fee512559b8371179d9c913536cec24109cbf98&"
    },
    {
        question: "Which character is a detective and leads the Chaotix?",
        options: ["Espio the Chameleon", "Vector the Crocodile", "Charmy Bee"],
        answer: "Vector the Crocodile",
        explanation: "Vector is the leader of Team Chaotix, a group of private detectives who take on various investigative cases.",
        references: ["Knuckles' Chaotix (1995)", "Sonic Heroes (2003)"],
        color: "#228B22",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352493974614708315/250.png?ex=67de37ab&is=67dce62b&hm=aca0a86a0acaa8d4795a7c303ad3b144e9673c4693848f262028fb6ce39e294e&",
        spoiler: true
    },
    {
        question: "Who is Silver the Hedgehog trying to save the future from?",
        options: ["Iblis", "Dr. Eggman", "Dark Gaia"],
        answer: "Iblis",
        explanation: "Silver's future is devastated by Iblis, a destructive entity that he tries to prevent from being unleashed.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#C0C0C0",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352494136078368808/1200.png?ex=67de37d2&is=67dce652&hm=0b5c89ea83e9de6b3a12686aa215cde05d5590f37cf480697ab9a9f8c3c52b01&",
        spoiler: true
    },
    {
        question: "What is Blaze the Cat's royal title?",
        options: ["Princess", "Queen", "Guardian"],
        answer: "Princess",
        explanation: "Blaze is the princess and protector of the Sol Dimension, where she guards the Sol Emeralds.",
        references: ["Sonic Rush (2005)", "Sonic Rush Adventure (2007)"],
        color: "#9932CC",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352494417805705257/blazethecat-blaze-the-cat.gif?ex=67de3815&is=67dce695&hm=ec69d1d8d33f04de9a4d812de1b168b42334e162ade1acf8a013af43c979f74c&"
    },
    {
        question: "Which character was originally created as a joke but became an official part of Sonic lore?",
        options: ["Big the Cat", "Fang the Sniper", "Bean the Dynamite"],
        answer: "Big the Cat",
        explanation: "Big was created as a humorous character but became a recurring part of the Sonic franchise.",
        references: ["Sonic Adventure (1998)", "Sonic Heroes (2003)"],
        color: "#9370DB",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352494559191502908/Big_the_Cat.png?ex=67de3837&is=67dce6b7&hm=3df41203be60ba2e36915c989d7ae48337a8f60e9c229e7160a007a2757cb30d&",
        spoiler: true
    },
    {
        question: "Who is the leader of the Babylon Rogues?",
        options: ["Jet the Hawk", "Wave the Swallow", "Storm the Albatross"],
        answer: "Jet the Hawk",
        explanation: "Jet is the self-proclaimed 'Legendary Wind Master' and the leader of the Babylon Rogues, an air-riding gang.",
        references: ["Sonic Riders (2006)"],
        color: "#008000",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352494649121570836/latest.png?ex=67de384c&is=67dce6cc&hm=dd807f00de88ee04a6ffca5778dc5f32fa59486b30223e52108af3974a891727&",
        spoiler: true
    },
    {
        question: "What does Dr. Eggman want to build?",
        options: ["Eggmanland", "Robotropolis", "Metropolis Zone"],
        answer: "Eggmanland",
        explanation: "Eggman dreams of creating 'Eggmanland,' a city dedicated to his rule and mechanical designs.",
        references: ["Sonic Unleashed (2008)"],
        color: "#FF0000",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352494866537648139/latest.png?ex=67de3880&is=67dce700&hm=32ceb492704892ef930e3fda5b5ccc12263a5f2da38a2b993a2e33476fad07de&",
        spoiler: true
    },
    {
        question: "Which ancient race created the Chaos Emeralds?",
        options: ["The Echidnas", "The Black Arms", "The Babylonians"],
        answer: "The Echidnas",
        explanation: "The ancient Echidnas of the Sonic world were the original protectors of the Chaos Emeralds.",
        references: ["Sonic Adventure (1998)", "Sonic Chronicles: The Dark Brotherhood (2008)"],
        color: "#8B0000",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352495205403590767/tumblr_18e7111a5c9ecb522ba4216986e30248_537ba8c6_540.gif?ex=67de38d1&is=67dce751&hm=bea4b7e3113883f4878723078d94936bf245dc9952c64c17f5015d66556bd4f1&",
        spoiler: true
    },
    {
        question: "Who was Mephiles the Dark a part of before he split?",
        options: ["Solaris", "Dark Gaia", "Chaos"],
        answer: "Solaris",
        explanation: "Mephiles was one half of Solaris, the sun god of Soleanna, before being separated into his own entity.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#4B0082",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352495410266112061/solaris-sonic.gif?ex=67de3901&is=67dce781&hm=8e2178bb27ab90304b797a9f3dcf47bfba97a42045a4ce0dcaf256fbf1bb9b69&",
        spoiler: true
    },
    {
        question: "What is the name of Sonic's home planet?",
        options: ["Mobius", "Earth", "Little Planet"],
        answer: "Mobius",
        explanation: "In the Archie Comics and older media, Sonic's world was called Mobius, though newer games suggest it's simply Earth.",
        references: ["Adventures of Sonic the Hedgehog (1993)", "Archie Sonic the Hedgehog (1992)"],
        color: "#1E90FF",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352495730312351825/f0cc2af545d9dc898c22287f70dc0b0e.gif?ex=67de394e&is=67dce7ce&hm=b5b1a6659c912c9bf39a9c0021625d58104f3156c64d58faeb00154944eeb171&"
    },
    {
        question: "Which villain was created through a clone of Shadow?",
        options: ["Metal Sonic", "Mephiles the Dark", "Black Doom"],
        answer: "Mephiles the Dark",
        explanation: "Mephiles was created when Solaris was split into two parts. He took Shadow's form after being released from the Scepter of Darkness.",
        references: ["Sonic the Hedgehog (2006)"],
        color: "#4B0082",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352495903453220904/tumblr_ebf8750ecada993d2def694e0a83e890_a6372c41_640.gif?ex=67de3977&is=67dce7f7&hm=7a52b83fb08d56e94774669e95d7e6173d722b96dad09aa0325d8da1a646a430&",
        spoiler: true
    },
    {
        question: "What is the name of Eggman's grandfather?",
        options: ["Gerald Robotnik", "Ivo Robotnik Sr.", "Julian Robotnik"],
        answer: "Gerald Robotnik",
        explanation: "Professor Gerald Robotnik was a brilliant scientist who created Shadow the Hedgehog and was the grandfather of Dr. Eggman.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#708090",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496096777207848/gerald-robotnik-lick.gif?ex=67de39a5&is=67dce825&hm=7876b465095c6271917273bccfa91dd91b91ca74e78ec0a9e078b8ccbf4e18dc&",
        spoiler: true
    },
    {
        question: "Which character is known as the 'Ultimate Life Form'?",
        options: ["Shadow the Hedgehog", "Sonic the Hedgehog", "Silver the Hedgehog"],
        answer: "Shadow the Hedgehog",
        explanation: "Shadow was created by Gerald Robotnik as the 'Ultimate Life Form', designed to be immortal and possess incredible powers.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#2E2E2E",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496281448087562/4b439a5d6efefed7428d9fdbb30693f1.gif?ex=67de39d1&is=67dce851&hm=bd44025acca3475a7281320d84e535d52143177b87a47108ff38449c3d846a0c&",
        spoiler: true
    },
    {
        question: "What color are the Chaos Emeralds?",
        options: ["Seven different colors", "All green", "All clear crystal"],
        answer: "Seven different colors",
        explanation: "The seven Chaos Emeralds are red, blue, green, yellow, cyan, purple, and white/gray.",
        references: ["Sonic the Hedgehog series"],
        color: "#00BFFF",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496478081515540/giphy.gif?ex=67de3a00&is=67dce880&hm=f26c9d6d98e2bc956e73895b403c4aec51d3fbaaca44bd1edf7e4a1b210a5ab3&",
        spoiler: true
    },
    {
        question: "Who is the main antagonist in Sonic Adventure?",
        options: ["Chaos", "Metal Sonic", "Perfect Chaos"],
        answer: "Chaos",
        explanation: "Chaos, the God of Destruction, was the primary antagonist in Sonic Adventure before transforming into Perfect Chaos at the end.",
        references: ["Sonic Adventure (1998)"],
        color: "#00CED1",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496741936529438/latest.png?ex=67de3a3f&is=67dce8bf&hm=c8d3f32e5813ce3d3a822684175df84b413c4c2f3fd82709d8ec403a589937e8&",
        spoiler: true
    },
    {
        question: "What was Sonic's prototype name before his final design?",
        options: ["Mr. Needlemouse", "Quickster", "Blue Blur"],
        answer: "Mr. Needlemouse",
        explanation: "During early development, Sonic was referred to as 'Mr. Needlemouse,' which is a literal translation of the Japanese word for hedgehog (ハリネズミ/harinezumi).",
        references: ["Sonic the Hedgehog (1991) development history"],
        color: "#1E90FF",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496892092616794/latest.png?ex=67de3a63&is=67dce8e3&hm=966f0c857e1cdac73308142c55f82c123008a3b3ab83666eaa52c397b5552bd9&",
        spoiler: true
    },
    {
        question: "Which scrapped Sonic character was meant to be part of the original band called the 'Sonic the Hedgehog Band'?",
        options: ["Max the Monkey", "Vector the Crocodile", "Mighty the Armadillo"],
        answer: "Vector the Crocodile",
        explanation: "Vector was originally designed as a band member for Sonic the Hedgehog Band, along with other characters. While Vector was ultimately scrapped from the band concept, he was later introduced in Knuckles' Chaotix.",
        references: ["Sonic the Hedgehog (1991) concept art", "Knuckles' Chaotix (1995)"],
        color: "#228B22",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352493974614708315/250.png?ex=67de37ab&is=67dce62b&hm=aca0a86a0acaa8d4795a7c303ad3b144e9673c4693848f262028fb6ce39e294e&",
        spoiler: true
    },
    {
        question: "What is the name of the forgotten Echidna tribe that disappeared into the Twilight Cage?",
        options: ["Nocturnus Clan", "Knuckles Clan", "Pachacamac Tribe"],
        answer: "Nocturnus Clan",
        explanation: "The Nocturnus Clan was a technologically advanced Echidna civilization that mysteriously vanished into the interdimensional prison known as the Twilight Cage.",
        references: ["Sonic Chronicles: The Dark Brotherhood (2008)"],
        color: "#800080",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352497133156302899/latest.png?ex=67de3a9c&is=67dce91c&hm=ef6a84c59bf24868f48b3ebdaafdbaed88946849942ac16cb0cd360d58c62971&",
        spoiler: true
    },
    {
        question: "What is the name of the transformation Sonic undergoes in 'Sonic and the Secret Rings'?",
        options: ["Darkspine Sonic", "Excalibur Sonic", "Super Sonic"],
        answer: "Darkspine Sonic",
        explanation: "Darkspine Sonic is a transformation that occurs when Sonic absorbs the World Rings of rage, hatred, and sadness in 'Sonic and the Secret Rings'.",
        references: ["Sonic and the Secret Rings (2007)"],
        color: "#4B0082",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352497400056647783/latest.png?ex=67de3adc&is=67dce95c&hm=2ed78bfb07490349130db8aedfe9fd571457c58017e5cd0b0b717d7b8a0e9e20&",
        spoiler: true
    },
    {
        question: "Which Sonic character was originally designed for a different game entirely before joining the franchise?",
        options: ["Mighty the Armadillo", "Bean the Dynamite", "Ray the Flying Squirrel"],
        answer: "Bean the Dynamite",
        explanation: "Bean the Dynamite was originally a character from Sega's 'Dynamite Dux' arcade game before being redesigned as a Sonic character for 'Sonic the Fighters'.",
        references: ["Dynamite Dux (1989)", "Sonic the Fighters (1996)"],
        color: "#32CD32",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498032616407110/latest.png?ex=67de3b73&is=67dce9f3&hm=ace74f78a3e968e0be46392ffee525151d39019d33d287b5e4572b6c80083cfb&",
        spoiler: true
    },
    {
        question: "What is the real name of the character known as 'Fang the Sniper'?",
        options: ["Nack the Weasel", "Duke the Wolf", "Bark the Polar Bear"],
        answer: "Nack the Weasel",
        explanation: "Fang the Sniper is known as Nack the Weasel in the Western regions. The name was changed in some releases due to localization differences.",
        references: ["Sonic Triple Trouble (1994)", "Sonic the Fighters (1996)"],
        color: "#9400D3",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498121250181130/latest.png?ex=67de3b88&is=67dcea08&hm=c48710fbcf9c346297a030e9d4b0f3651150837ee1c19a6a5f7dcf6a91b3c7e9&",
        spoiler: true
    },
    {
        question: "What is the name of Gerald Robotnik's research journal that detailed Shadow's creation?",
        options: ["Project Shadow Report", "The Gerald Papers", "Robotnik's Memoirs"],
        answer: "Project Shadow Report",
        explanation: "The Project Shadow Report contained all of Gerald Robotnik's research notes about the creation of Shadow the Hedgehog and was vital to understanding Shadow's origins.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#808080",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498229773598863/kn8flswgh5d51.png?ex=67de3ba2&is=67dcea22&hm=125f60a89e06d6eb9c98c1d274fd328d6c7837abc4b861f4af345abb8eea733f&",
        spoiler: true
    },
    {
        question: "Which mythological creature is the Babylon Rogues' Extreme Gear technology based on?",
        options: ["The Babylonian Garden", "The Magic Carpet", "The Floating Island"],
        answer: "The Magic Carpet",
        explanation: "The Extreme Gear technology used by the Babylon Rogues is revealed to be based on the legendary Magic Carpet from ancient Babylonian tales.",
        references: ["Sonic Riders (2006)", "Sonic Riders: Zero Gravity (2008)"],
        color: "#DAA520",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498414214185040/latest.png?ex=67de3bce&is=67dcea4e&hm=8b1956d550afd287fc798fbfa0f8eb9079f779880c3055ca280c3a9b8a5ad4ce&",
        spoiler: true
    },
    {
        question: "What was the original Japanese title of 'Sonic CD'?",
        options: ["Sonic the Hedgehog CD", "Sonic CD: Little Planet", "Sonic the Hedgehog: The Miracle Planet"],
        answer: "Sonic the Hedgehog CD",
        explanation: "The original Japanese title was simply 'Sonic the Hedgehog CD' (ソニック・ザ・ヘッジホッグCD), though it featured the subtitle 'Miracle Planet' in some promotional materials.",
        references: ["Sonic CD (1993)"],
        color: "#4169E1",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498564156358797/Sonic_CD_North_American_cover_art.png?ex=67de3bf1&is=67dcea71&hm=825e992b3ac2f077eacff54f7c250d945a63db365fb6a16cc4f5badc4fc94941&",
        spoiler: true
    },
    {
        question: "What power do the seven Super Emeralds grant Sonic?",
        options: ["Hyper Sonic form", "Dark Sonic form", "Werehog form"],
        answer: "Hyper Sonic form",
        explanation: "The Super Emeralds transform Sonic into Hyper Sonic, an even more powerful form than Super Sonic, first seen in Sonic 3 & Knuckles.",
        references: ["Sonic 3 & Knuckles (1994)"],
        color: "#FFFFFF",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498710348562523/latest.png?ex=67de3c14&is=67dcea94&hm=16bb8e7cc49c53bd9363202a0813e64d40a124ed33eeb59876c72f12e9bba8c1&",
        spoiler: true
    },
    {
        question: "What is the name of Dr. Eggman's space station in Sonic Adventure 2?",
        options: ["Space Colony ARK", "Death Egg", "Egg Carrier"],
        answer: "Space Colony ARK",
        explanation: "The Space Colony ARK was a research facility where Gerald Robotnik created Shadow and was the main setting for the final battles.",
        references: ["Sonic Adventure 2 (2001)"],
        color: "#A9A9A9",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352498896877916241/7B3CCCF587061FB3849DE9888E580FE0BB295E1B.png?ex=67de3c41&is=67dceac1&hm=3621995a900be9dd29feaf08f8dc9c8c915b3abde5e81032d906173657eae124&"
    },
    {
        question: "Which character was originally intended to be Sonic's love interest?",
        options: ["Madonna", "Amy Rose", "Sally Acorn"],
        answer: "Madonna",
        explanation: "Before Amy Rose, a character named Madonna was designed as Sonic's girlfriend in early development but was later scrapped.",
        references: ["Sonic the Hedgehog (1991) development history"],
        color: "#FFC0CB",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352499067317653584/latest.png?ex=67de3c69&is=67dceae9&hm=ddd479995be7eed2b79fcbf6d8f6e985dcc723b9c7c16125e7c1739e5d4b9024&",
        spoiler: true
    },
    {
        question: "What is the name of the peaceful alien race that Sonic befriends in Sonic Colors?",
        options: ["Wisps", "Chao", "Flickies"],
        answer: "Wisps",
        explanation: "Wisps are colorful aliens with special powers that Dr. Eggman attempts to harvest in Sonic Colors.",
        references: ["Sonic Colors (2010)"],
        color: "#FF69B4",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352499226072060004/latest.png?ex=67de3c8f&is=67dceb0f&hm=8593d4bb5aee0f0e8e73d4098d4f8cc2ffeda0d52d19a273cb70506c27c3ade6&"
    },
    {
        question: "Which ancient deity is sealed within the Master Emerald?",
        options: ["Chaos", "Tikal", "Dark Gaia"],
        answer: "Chaos",
        explanation: "Chaos, the God of Destruction, was sealed inside the Master Emerald along with Tikal's spirit.",
        references: ["Sonic Adventure (1998)"],
        color: "#00FFFF",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352496741936529438/latest.png?ex=67de3a3f&is=67dce8bf&hm=c8d3f32e5813ce3d3a822684175df84b413c4c2f3fd82709d8ec403a589937e8&",
        spoiler: true
    },
    {
        question: "What is the transformation called when Sonic absorbs the negative energy of the Chaos Emeralds?",
        options: ["Dark Sonic", "Darkspine Sonic", "Shadow the Hedgehog"],
        answer: "Dark Sonic",
        explanation: "Dark Sonic appears when Sonic is filled with rage and absorbs negative Chaos energy, shown briefly in Sonic X.",
        references: ["Sonic X (Episode 67)"],
        color: "#191970",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352499593283371102/hq720.png?ex=67de3ce7&is=67dceb67&hm=5e80f5ffbc95d159881d76d02cbcd92569b8feda79513e02d3cd4ba79f606445&",
        spoiler: true
    },
    {
        question: "Which planet does Black Doom originate from?",
        options: ["Black Comet", "Dark Planet", "The ARK"],
        answer: "Black Comet",
        explanation: "Black Doom is the leader of the Black Arms aliens who come from the Black Comet, which passes Earth every 50 years.",
        references: ["Shadow the Hedgehog (2005)"],
        color: "#8B0000",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352499772824617043/image.png?ex=67de3d12&is=67dceb92&hm=4dcdcb75dbd00d8492870e188184576b54628c8a4d4eb1eb0f7d4a813ecbeffe&",
        spoiler: true
    },
    {
        question: "What was the first Sonic game to feature the Spin Dash ability?",
        options: ["Sonic the Hedgehog 2", "Sonic CD", "Sonic the Hedgehog"],
        answer: "Sonic the Hedgehog 2",
        explanation: "The Spin Dash, allowing Sonic to rev up in place before launching forward, was introduced in Sonic 2.",
        references: ["Sonic the Hedgehog 2 (1992)"],
        color: "#FFD700",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352499923366707200/hqdefault.png?ex=67de3d35&is=67dcebb5&hm=093301f608b98a993349f321d63ef5da89f564a18b77ae793327695e6524b3da&",
        spoiler: true
    },
    {
        question: "Who is the creator of Emerl the Gizoid?",
        options: ["Ancient Echidna Civilization", "Gerald Robotnik", "Dr. Eggman"],
        answer: "Ancient Echidna Civilization",
        explanation: "Emerl was created thousands of years ago by the Nocturnus Clan, an ancient Echidna civilization that mastered Gizoid technology.",
        references: ["Sonic Battle (2003)", "Sonic Chronicles: The Dark Brotherhood (2008)"],
        color: "#DAA520",
        image: "https://cdn.discordapp.com/attachments/677053170676924447/1352500059765215343/latest.png?ex=67de3d56&is=67dcebd6&hm=3bdadf676e7c646b208fa761ab1860e692dbe820474fae05944599ba65fd941e&"
    }
];

module.exports = triviaQuestionsSonic;