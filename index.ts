// Import a sync input module
const input = require('prompt-sync')();

// Define the interface to help make stats
interface Player {
  name: string;
  pointsPerGame: number;
  assistsPerGame: number;
  reboundsPerGame: number;
  teams: string[];
  championships: number;
}

// Helper function to create a player
function createPlayer(
  name: string,
  pointsPerGame: number,
  assistsPerGame: number,
  reboundsPerGame: number,
  teams: string[],
  championships: number
): Player {
  return {
    name,
    pointsPerGame,
    assistsPerGame,
    reboundsPerGame,
    teams,
    championships,
  };
}

// Where to Create These Players
const lebron = createPlayer(
  "LeBron James",
  27.2,
  7.3,
  7.5,
  ["Cavaliers", "Heat", "Lakers"],
  4
);

const curry = createPlayer(
  "Stephen Curry",
  24.8,
  6.4,
  4.7,
  ["Warriors"],
  4
);

// Randomizer function
function getRandomPlayer(players: Player[]): Player {
  const index = Math.floor(Math.random() * players.length);
  return players[index];
}

// Game logic
function playGame(players: Player[]) {
  const mysteryPlayer = getRandomPlayer(players);
  let attempts = 0; // Start with
  const maxAttempts = 3; // Max

  console.log("Welcome to 'Guess the NBA Player!'");
  console.log("You have 3 attempts to guess the player based on the clues provided.\n");

  while (attempts < maxAttempts) {
    console.log(`\nAttempt ${attempts + 1} of ${maxAttempts}`);
    console.log(`Points per Game: ${mysteryPlayer.pointsPerGame}`);
    console.log(`Assists per Game: ${mysteryPlayer.assistsPerGame}`);
    console.log(`Rebounds per Game: ${mysteryPlayer.reboundsPerGame}`);

    if (attempts >= 2) {
      console.log(`Teams Played For: ${mysteryPlayer.teams.join(", ")}`);
      console.log(`Championships Won: ${mysteryPlayer.championships}`);
    }

    const userGuess = input("Your Guess: ").trim().toLowerCase();

    if (userGuess === mysteryPlayer.name.toLowerCase()) {
      console.log("\n Correct! You guessed the player!");
      return;
    } else {
      console.log(" Incorrect guess.");
    }

    attempts++;
  }

  console.log(`\nOut of attempts! The correct answer was: ${mysteryPlayer.name}`);
}

// Launch the game with a player pool still try to figure out how to do this better
const players: Player[] = [lebron, curry];
playGame(players);
