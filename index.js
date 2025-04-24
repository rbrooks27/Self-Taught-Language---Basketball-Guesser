// Import a sync input module
var input = require('prompt-sync')();
// Helper function to create a player
function createPlayer(name, pointsPerGame, assistsPerGame, reboundsPerGame, teams, championships) {
    return {
        name: name,
        pointsPerGame: pointsPerGame,
        assistsPerGame: assistsPerGame,
        reboundsPerGame: reboundsPerGame,
        teams: teams,
        championships: championships,
    };
}
// Where to Create These Players
var lebron = createPlayer(["LeBron James", "King James", "Lebron", "LBJ", "The Goat"], 27.2, // Points
7.3, // Assists
7.5, // Rebounds
["Cavaliers", "Heat", "Lakers"], // Teams Played For
4 // Championships
);
var curry = createPlayer(["Stephen Curry", "Steph", "Chef Curry", "Splash Brother"], 24.8, 6.4, 4.7, ["Warriors"], 4);
var tatum = createPlayer(["Jayson Tatum", "JT", "Taco Jay"], 26.4, 4.3, 8.1, ["Celtics"], 0);
var giannis = createPlayer(["Giannis Antetokounmpo", "Greek Freak", "Giannis"], 29.5, 5.9, 11.2, ["Bucks"], 1);
var jokic = createPlayer(["Nikola Jokic", "Joker", "Jokic"], 26.4, 9.0, 12.4, ["Nuggets"], 1);
var durant = createPlayer(["Kevin Durant", "KD", "Slim Reaper"], 27.1, 5.6, 7.1, ["Thunder", "Warriors", "Nets", "Suns"], 2);
// Randomizer function
function getRandomPlayer(players) {
    var index = Math.floor(Math.random() * players.length);
    return players[index];
}
// Game logic
function playGame(players) {
    var mysteryPlayer = getRandomPlayer(players);
    var attempts = 0; // Start with
    var maxAttempts = 3; // Max
    console.log("Welcome to 'Guess the NBA Player!'");
    console.log("You have 3 attempts to guess the player based on the clues provided.\n");
    var _loop_1 = function () {
        console.log("\nAttempt ".concat(attempts + 1, " of ").concat(maxAttempts));
        console.log("Points per Game: ".concat(mysteryPlayer.pointsPerGame));
        console.log("Assists per Game: ".concat(mysteryPlayer.assistsPerGame));
        console.log("Rebounds per Game: ".concat(mysteryPlayer.reboundsPerGame));
        if (attempts >= 2) {
            console.log("Teams Played For: ".concat(mysteryPlayer.teams.join(", ")));
            console.log("Championships Won: ".concat(mysteryPlayer.championships));
        }
        var userGuess = input("Your Guess: ").trim().toLowerCase();
        if (mysteryPlayer.name.some(function (name) { return name.toLowerCase() === userGuess; })) {
            console.log("\n Correct! You guessed the player!");
            return { value: void 0 };
        }
        else {
            console.log(" Incorrect guess.");
        }
        attempts++;
    };
    while (attempts < maxAttempts) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    console.log("\nOut of attempts! The correct answer was: ".concat(mysteryPlayer.name[0]));
}
// Launch the game with a player pool still try to figure out how to do this better
var players = [lebron, curry, giannis, tatum, durant, jokic];
playGame(players);
