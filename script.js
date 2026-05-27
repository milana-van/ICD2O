// Mob Database with Hints and Image URLs
const MOBS = [
    {
        name: "Creeper",
        hints: [
            "Silent footsteps until you hear a fuse",
            "Green with a face that shows no emotion",
            "Leaves a crater behind after meeting you",
            "Runs away from feline creatures",
            "Turns blue and white when struck by lightning",
            "Its hiss is the last sound many hear"
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/4/49/Creeper_%28Minecraft%29.png"
    },
    {
        name: "Enderman",
        hints: [
            "Three blocks tall with long thin limbs",
            "Carries random blocks it picked up",
            "Hates water like it's acid",
            "Staring at its face makes it angry",
            "Makes a strange static sound when teleporting",
            "Purple particles surround it when moving"
        ],
        image: "https://minecraft.wiki/images/AMCM_Enderman.jpg?dd7bc"
    },
    {
        name: "Zombie",
        hints: [
            "Wears ragged clothing but no weapon",
            "Burns when touched by sunlight",
            "Moans and groans when nearby",
            "Has a rare variant that can break doors",
            "Often found in dark places with arms stretched forward",
            "Villagers transform into this when bitten"
        ],
        image: "https://minecraft.wiki/images/Zombie_JE3_BE2.png?cd74c"
    },
    {
        name: "Skeleton",
        hints: [
            "Carries a bow but never uses melee",
            "Makes rattling bone sounds when moving",
            "Its arrows can trigger pressure plates",
            "Burns in daylight unless wearing a helmet",
            "Sometimes rides a four-legged creature",
            "Drops white sticks when defeated"
        ],
        image: "https://minecraft.wiki/images/Skeleton_JE6_BE4.png?85786"
    },
    {
        name: "Spider",
        hints: [
            "Has six legs in real life but eight here",
            "Can climb vertical surfaces without ladders",
            "Red eyes glow in the darkness",
            "Becomes neutral during daytime",
            "Sometimes has a passenger on its back",
            "Drops string that can make wool"
        ],
        image: "https://minecraft.wiki/images/Spider_JE3_BE2.png?abf8d"
    },
    {
        name: "Witch",
        hints: [
            "Lives in swamp huts with a cat",
            "Throws splash potions at you",
            "Drinks her own potions to heal",
            "Immune to poison and regeneration effects",
            "Makes cackling sounds when attacking",
            "Drops sticks, sugar, and redstone dust"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/Witch.png/revision/latest?cb=20220611062944"
    },
    {
        name: "Slime",
        hints: [
            "Bounces instead of walking",
            "Splits into smaller versions when killed",
            "Only appears in specific chunks at certain Y levels",
            "Makes a squelching sound when jumping",
            "Takes no fall damage like a cat",
            "Its smallest form dies instantly"
        ],
        image: "https://minecraft.wiki/images/Slime_JE3_BE2.png?4e0c6"
    },
    {
        name: "Ghast",
        hints: [
            "Large floating white cube with tentacles",
            "Cries tears that become healing potions",
            "Shoots fireballs you can reflect",
            "Makes sad crying sounds",
            "Spawns in open nether wastes",
            "Drops gunpowder and ghast tears"
        ],
        image: "https://minecraft.wiki/images/AMCM_Ghast.png?d6eef"
    },
    {
        name: "Blaze",
        hints: [
            "Floating yellow creature surrounded by smoke",
            "Shoots three fireballs in rapid succession",
            "Spawns only near nether fortresses",
            "Makes metallic breathing sounds",
            "Takes damage from snowballs",
            "Drops blaze rods for potion brewing"
        ],
        image: "https://minecraft.wiki/images/Blaze_JE2.gif?29f6f"
    },
    {
        name: "Wither Skeleton",
        hints: [
            "Tall black skeleton with a stone sword",
            "Inflicts wither effect on hit",
            "Spawns only in nether fortresses",
            "Drops coal and rarely wither skulls",
            "Three skulls summon a boss",
            "Makes clanking bone sounds"
        ],
        image: "https://minecraft.wiki/images/Wither_Skeleton_JE4_BE3.png?9c107&format=original"
    },
    {
        name: "Magma Cube",
        hints: [
            "Bounces higher than green cubes",
            "Drops magma cream when defeated",
            "Immune to fire and lava damage",
            "Found only in hell-like dimension",
            "Has a fiery orange and black texture",
            "Splits just like its green cousin"
        ],
        image: "https://minecraft.wiki/images/Magma_Cube_JE2_BE2.png?9a1f9"
    },
    {
        name: "Piglin",
        hints: [
            "Wears golden armor and carries crossbows or swords",
            "Attacks on sight if not wearing gold",
            "Hates soul fire and soul torches",
            "Barters with players using gold ingots",
            "Runs away from zombified versions",
            "Spawns in crimson forests"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Piglin.png/revision/latest?cb=20220610025226"
    },
    {
        name: "Hoglin",
        hints: [
            "Large aggressive pig-like beast",
            "Attacks players on sight in nether",
            "Drops porkchop and leather",
            "Repelled by warped fungus",
            "Makes grunting and snorting sounds",
            "Turns into zoglin in overworld"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/Hoglin_JE3.png/revision/latest/scale-to-width-down/1000?cb=20240729214720"
    },
    {
        name: "Strider",
        hints: [
            "Red creature that walks on lava",
            "Can be ridden with a saddle and fungus",
            "Shivers when on land or in water",
            "Has strands of hair hanging down",
            "Breeds with warped fungus",
            "Baby striders ride on adults' backs"
        ],
        image: "https://minecraft.wiki/images/Strider_JE2_BE2.gif?f8244"
    },
    {
        name: "Phantom",
        hints: [
            "Attacks players who haven't slept for days",
            "Burns in sunlight like undead mobs",
            "Flies silently in circles before diving",
            "Has tattered wings and glowing green eyes",
            "Drops membranes that repair elytra",
            "Only spawns at night above sea level"
        ],
        image: "https://www.minecraft.net/content/dam/minecraftnet/archive/c87e0bc17fc2f6d9889c3b4f95122e4e-ImageOne.png"
    },
    {
        name: "Drowned",
        hints: [
            "Zombie that lives underwater",
            "Sometimes carries a trident instead of nothing",
            "Can swim faster than you think",
            "Makes gurgling sounds underwater",
            "Drops copper ingots rarely",
            "Found in oceans and rivers at night"
        ],
        image: "https://minecraft.wiki/images/Drowned_JE2_BE2.png?088ca"
    },
    {
        name: "Guardian",
        hints: [
            "Fish-like creature with spikes",
            "Fires laser beams that take time to charge",
            "Protects underwater monuments",
            "Has a large elder variant that mines fatigue",
            "Makes a squeaking sound when hit",
            "Drops prismarine crystals and shards"
        ],
        image: "https://minecraft.wiki/images/Drowned_JE2.png?408ba"
    },
    {
        name: "Shulker",
        hints: [
            "Hides inside a box-like shell",
            "Fires homing projectiles that levitate",
            "Blends in with purpur blocks",
            "Opens its shell to reveal a small head",
            "Drops shells used for ender chests",
            "Sticks to walls and ceilings"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/06/Shulker.png/revision/latest?cb=20200107095352"
    },
    {
        name: "Villager",
        hints: [
            "Trades items for emeralds",
            "Has different robes by profession",
            "Makes 'hmm' sounds when trading",
            "Gets angry if you hit their golem",
            "Sleeps in beds at night",
            "Child villagers play tag"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d8/Plains_Villager_Base.png/revision/latest?cb=20260104164016"
    },
    {
        name: "Iron Golem",
        hints: [
            "Protects villagers from hostile mobs",
            "Gives poppies to baby villagers",
            "Created with four iron blocks and pumpkin",
            "Attacks you if you hurt a villager",
            "Makes metallic footstep sounds",
            "Has vines growing on cracks when hurt"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Iron_Golem_JE2_BE2.png/revision/latest?cb=20190605101959"
    },
    {
        name: "Wolf",
        hints: [
            "Tamed with bones from skeletons",
            "Attacks skeletons on sight",
            "Tail height shows health",
            "Makes growling sounds when angry",
            "Shakes water off like real dogs",
            "Breed with any meat"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Wolf_JE2_BE2.png/revision/latest?cb=20240729213411"
    },
    {
        name: "Cat",
        hints: [
            "Tamed with fish found in villages",
            "Scares creepers and phantoms away",
            "Gives gifts when you sleep",
            "Sits on chests making them unlootable",
            "Comes in different coat colors",
            "Jumps onto beds and furnaces"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/73/Tuxedo_Cat_JE2_BE2.png/revision/latest?cb=20240729214002"
    },
    {
        name: "Horse",
        hints: [
            "Tamed by repeatedly trying to ride",
            "Comes in many coat colors and patterns",
            "Jumps higher than player can",
            "Makes neighing and galloping sounds",
            "Equipped with armor and chests",
            "Speed and jump vary by individual"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/86/White_Horse.png/revision/latest?cb=20240729214716"
    },
    {
        name: "Bee",
        hints: [
            "Pollinates flowers and makes honey",
            "Becomes angry if nest is broken",
            "Stings once then dies shortly after",
            "Carries pollen particles on tail",
            "Makes buzzing sounds",
            "Sleeps at night inside nest"
        ],
        image: "https://www.hallmarkornaments.com/assets/images/Minecraft-Bee-Keepsake-Ornament_1399QXI7189_01.jpg"
    },
    {
        name: "Axolotl",
        hints: [
            "Plays dead when hurt to regenerate",
            "Comes in five different colors",
            "Attacks guardians and drowned",
            "Can be picked up in bucket",
            "Makes little chirping sounds",
            "Gives regeneration effect to player"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Lucy_Axolotl_JE2.png/revision/latest?cb=20240729213943"
    },
    {
        name: "Frog",
        hints: [
            "Eats small slimes and magma cubes",
            "Drops froglight after eating magma",
            "Comes in three colors by biome",
            "Jumps around and croaks",
            "Walks on lily pads",
            "Tadpole grows into frog"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Cold_Frog_JE1_BE1.png/revision/latest?cb=20220603223359"
    },
    {
        name: "Allay",
        hints: [
            "Small blue flying creature",
            "Follows player and picks up items",
            "Loves music box sounds",
            "Holds item in its hands",
            "Found in pillager outposts and mansions",
            "Drops nothing but dances"
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfopposyoaFdiepozvjC7rUftQvGA0tEQlGw&s"
    },
    {
        name: "Ravager",
        hints: [
            "Large beast ridden by illagers in raids",
            "Breaks crops and leaves destruction",
            "Has thick armor-like skin",
            "Roars loudly before charging",
            "Immune to knockback like iron golem",
            "Spawns only during late raid waves"
        ],
        image: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ef/Ravager_BE1.png/revision/latest?cb=20210310023457"
    },
    {
        name: "Vex",
        hints: [
            "Tiny flying creature with iron sword",
            "Phases through walls and floors",
            "Summoned by evokers during fights",
            "Flies faster than players can run",
            "Makes high-pitched laughing sounds",
            "Dies after a short time on its own"
        ],
        image: "https://minecraft.wiki/images/Vex_JE2_BE2.png?e73fe"
    },
    {
        name: "Ender Dragon",
        hints: [
            "Perches on bedrock fountain at end",
            "Destroys everything except end stone",
            "Heals from end crystals",
            "Has purple breath attack",
            "Flies through blocks without collision",
            "Drops dragon egg and lots of XP"
        ],
        image: "https://static.wikia.nocookie.net/animatorvsanimation/images/a/ab/Ender_Dragon.webp/revision/latest?cb=20250831052524"
    }
];

// Game State
let gameState = {
    currentMob: null,
    attempts: 3,
    timeLeft: 60,
    guesses: [],
    usedMobs: [],
    timerInterval: null,
    gameActive: false
};

// Page Elements
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');
const resultPage = document.getElementById('resultPage');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const guessInput = document.getElementById('guessInput');
const timerDisplay = document.getElementById('timerDisplay');
const attemptsDisplay = document.getElementById('attemptsDisplay');
const hintsList = document.getElementById('hintsList');
const feedback = document.getElementById('feedback');
const guessesList = document.getElementById('guessesList');
const nextBtn = document.getElementById('nextBtn');
const menuBtn = document.getElementById('menuBtn');
const resultText = document.getElementById('resultText');
const mobImage = document.getElementById('mobImage');
const resultAnimation = document.getElementById('resultAnimation');
const particleContainer = document.getElementById('particleContainer');

// Event Listeners
startBtn.addEventListener('click', startNewGame);
submitBtn.addEventListener('click', submitGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') submitGuess();
});
nextBtn.addEventListener('click', startNewGame);
menuBtn.addEventListener('click', goToMenu);

// Helper Functions
function getRandomMob() {
    let availableMobs = MOBS.filter(mob => !gameState.usedMobs.includes(mob.name));
    
    if (availableMobs.length === 0) {
        gameState.usedMobs = [];
        availableMobs = MOBS;
    }
    
    const randomMob = availableMobs[Math.floor(Math.random() * availableMobs.length)];
    gameState.usedMobs.push(randomMob.name);
    return randomMob;
}

function getRandomHints(mob, count = 4) {
    const shuffled = [...mob.hints].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function displayHints(hints) {
    hintsList.innerHTML = '';
    hints.forEach((hint, index) => {
        const hintEl = document.createElement('div');
        hintEl.className = 'hint';
        hintEl.innerHTML = `<strong>Hint ${index + 1}:</strong> ${hint}`;
        hintsList.appendChild(hintEl);
    });
}

function updateTimer() {
    gameState.timeLeft--;
    updateTimerDisplay();
    
    if (gameState.timeLeft <= 0) {
        endGame(false, "Time's up!");
    }
}

function updateTimerDisplay() {
    timerDisplay.textContent = gameState.timeLeft + 's';
    
    timerDisplay.classList.remove('warning', 'danger');
    if (gameState.timeLeft <= 10) {
        timerDisplay.classList.add('danger');
    } else if (gameState.timeLeft <= 20) {
        timerDisplay.classList.add('warning');
    }
}

function updateAttemptsDisplay() {
    const hearts = attemptsDisplay.querySelectorAll('.attempt');
    hearts.forEach((heart, index) => {
        if (index >= gameState.attempts) {
            heart.classList.add('lost');
        } else {
            heart.classList.remove('lost');
        }
    });
}

function startNewGame() {
    gameState.currentMob = getRandomMob();
    gameState.attempts = 3;
    gameState.timeLeft = 60;
    gameState.guesses = [];
    gameState.gameActive = true;
    
    clearInterval(gameState.timerInterval);
    
    displayHints(getRandomHints(gameState.currentMob));
    updateAttemptsDisplay();
    updateTimerDisplay();
    
    guessInput.value = '';
    feedback.innerHTML = '';
    guessesList.innerHTML = '';
    guessInput.focus();
    
    showPage('gamePage');
    
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function submitGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    
    if (!guess) {
        showFeedback('Please enter a mob name!', 'warning');
        return;
    }
    
    if (gameState.guesses.includes(guess)) {
        showFeedback("You've already guessed that!", 'warning');
        guessInput.value = '';
        return;
    }
    
    gameState.guesses.push(guess);
    
    // Add to previous guesses list
    const guessItem = document.createElement('li');
    guessItem.textContent = guess.charAt(0).toUpperCase() + guess.slice(1);
    guessesList.appendChild(guessItem);
    
    const correctName = gameState.currentMob.name.toLowerCase();
    
    if (guess === correctName) {
        endGame(true, "You guessed right!");
    } else {
        gameState.attempts--;
        updateAttemptsDisplay();
        
        if (gameState.attempts <= 0) {
            endGame(false, `You lose, the mob is ${gameState.currentMob.name}`);
        } else {
            showFeedback(`❌ Wrong! You have ${gameState.attempts} attempt${gameState.attempts === 1 ? '' : 's'} left.`, 'incorrect');
        }
    }
    
    guessInput.value = '';
    guessInput.focus();
}

function showFeedback(message, type) {
    feedback.className = `feedback ${type}`;
    feedback.textContent = message;
}

function endGame(won, message) {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);
    
    resultText.textContent = message;
    resultText.className = `result-text ${won ? 'win' : 'lose'}`;
    mobImage.src = gameState.currentMob.image;
    
    resultAnimation.innerHTML = '';
    
    if (won) {
        createCelebration();
    } else {
        createLoseAnimation();
    }
    
    showPage('resultPage');
}

function createCelebration() {
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}

function createLoseAnimation() {
    resultAnimation.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const thumbsDown = document.createElement('div');
        thumbsDown.style.cssText = `
            position: absolute;
            font-size: 48px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: slideInLeft ${1 + Math.random() * 0.5}s ease-in forwards;
        `;
        thumbsDown.textContent = '👎';
        resultAnimation.appendChild(thumbsDown);
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const emojis = ['🎉', '✨', '⭐', '🌟', '💫'];
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    const angle = (Math.random() * Math.PI * 2);
    const velocity = 150 + Math.random() * 200;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');
    
    particleContainer.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1500);
}

function showPage(pageName) {
    homePage.classList.remove('active');
    gamePage.classList.remove('active');
    resultPage.classList.remove('active');
    
    if (pageName === 'homePage') homePage.classList.add('active');
    if (pageName === 'gamePage') gamePage.classList.add('active');
    if (pageName === 'resultPage') resultPage.classList.add('active');
}

function goToMenu() {
    clearInterval(gameState.timerInterval);
    gameState.gameActive = false;
    gameState.usedMobs = [];
    showPage('homePage');
}

// Initialize
showPage('homePage');
