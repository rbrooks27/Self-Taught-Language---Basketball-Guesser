// Import a sync input module if using in a Node environment
var input = require('prompt-sync')();
// Step 2: Helper function to create a player
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
// Step 3: Create some known players
var lebron = createPlayer("LeBron James", 27.2, 7.3, 7.5, ["Cavaliers", "Heat", "Lakers"], 4);
var curry = createPlayer("Stephen Curry", 24.8, 6.4, 4.7, ["Warriors"], 4);
// Step 4: Randomizer function
function getRandomPlayer(players) {
    var index = Math.floor(Math.random() * players.length);
    return players[index];
}
// Step 5: Game logic
function playGame(players) {
    var mysteryPlayer = getRandomPlayer(players);
    var attempts = 0;
    var maxAttempts = 3;
    console.log("Welcome to 'Guess the NBA Player!'");
    console.log("You have 3 attempts to guess the player based on the clues provided.\n");
    while (attempts < maxAttempts) {
        console.log("\nAttempt ".concat(attempts + 1, " of ").concat(maxAttempts));
        console.log("Points per Game: ".concat(mysteryPlayer.pointsPerGame));
        console.log("Assists per Game: ".concat(mysteryPlayer.assistsPerGame));
        console.log("Rebounds per Game: ".concat(mysteryPlayer.reboundsPerGame));
        if (attempts >= 2) {
            console.log("Teams Played For: ".concat(mysteryPlayer.teams.join(", ")));
            console.log("Championships Won: ".concat(mysteryPlayer.championships));
        }
        var userGuess = input("Your Guess: ").trim().toLowerCase();
        if (userGuess === mysteryPlayer.name.toLowerCase()) {
            console.log("\n🎉 Correct! You guessed the player!");
            return;
        }
        else {
            console.log("❌ Incorrect guess.");
        }
        attempts++;
    }
    console.log("\nOut of attempts! The correct answer was: ".concat(mysteryPlayer.name));
}
// Step 6: Launch the game with a player pool
var players = [lebron, curry];
playGame(players);
