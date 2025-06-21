const readline = require("readline-sync");
let playerName = "";
let playerHealth = 100;
let playerGold = 25;
let playerLocation = "village";
let gameRunning = true;
let inventory = [];
// create variables for player stats
let playerStrength = 10;
let playerIntelligence = 10;
let playerAgility = 10;


// get player name using readline-sync
playerName = readline.question("Enter your name: ");

/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");
// Display the player's name
console.log(`Hello, ${playerName}! Welcome to the world, before we begin let's view your stats`);
// Display player stats
console.log(`Health: ${playerHealth}`);
console.log(`Gold: ${playerGold}`);
console.log(`Strength: ${playerStrength}`);
console.log(`Intelligence: ${playerIntelligence}`);
console.log(`Agility: ${playerAgility}`);



