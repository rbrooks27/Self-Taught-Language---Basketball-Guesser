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
var tatum = createPlayer(["Jayson Tatum", "JT", "Taco Jay", "Tatum"], 26.4, 4.3, 8.1, ["Celtics"], 0);
var giannis = createPlayer(["Giannis Antetokounmpo", "Greek Freak", "Giannis"], 29.5, 5.9, 11.2, ["Bucks"], 1);
var jokic = createPlayer(["Nikola Jokic", "Joker", "Jokic"], 26.4, 9.0, 12.4, ["Nuggets"], 1);
var durant = createPlayer(["Kevin Durant", "KD", "Slim Reaper", "Durant"], 27.1, 5.6, 7.1, ["Thunder", "Warriors", "Nets", "Suns"], 2);
var lamelo = createPlayer(["LaMelo Ball", "Melo", "Ball", "LaMelo"], 26.7, 7.1, 5.1, ["Hornets"], 0);
var juliusRandle = createPlayer(["Julius Randle", "Randle"], 19.1, 3.7, 9.4, ["Lakers", "Pelicans", "Knicks"], 0);
var evanMobley = createPlayer(["Evan Mobley", "Mobley"], 16.3, 2.9, 9.0, ["Cavaliers"], 0);
var donovanMitchell = createPlayer(["Donovan Mitchell", "Spida", "D Mitch", "Mitchell"], 24.8, 4.5, 4.3, ["Jazz", "Cavaliers"], 0);
var kristapsPorzingis = createPlayer(["Kristaps Porzingis", "The Unicorn", "Porzingis"], 19.6, 1.8, 7.9, ["Knicks", "Mavericks", "Wizards", "Celtics"], 0);
var demarDerozan = createPlayer(["DeMar DeRozan", "Deebo", "Mr. I Am Toronto", "DeRozan", "Demar"], 21.3, 4.1, 4.4, ["Raptors", "Spurs", "Bulls", "Kings"], 0);
var russellWestbrook = createPlayer(["Russell Westbrook", "The Brodie", "Beastbrook", "Mr. Triple Double", "Russ", "Westbrook"], 21.3, 8.1, 7.1, ["Thunder", "Rockets", "Wizards", "Lakers", "Clippers", "Nuggets"], 0);
var jamesHarden = createPlayer(["James Harden", "The Beard", "Harden"], 24.1, 7.0, 5.6, ["Thunder", "Rockets", "Nets", "76ers", "Clippers"], 0);
var paulGeorge = createPlayer(["Paul George", "PG13", "PG"], 20.8, 3.7, 6.3, ["Pacers", "Thunder", "Clippers"], 0);
var kyrieIrving = createPlayer(["Kyrie Irving", "Uncle Drew", "Kyrie"], 23.4, 5.7, 3.9, ["Cavaliers", "Celtics", "Nets", "Mavericks"], 1);
var pascalSiakam = createPlayer(["Pascal Siakam", "Spicy P", "Siakam", "Pascal"], 17.7, 4.4, 6.6, ["Raptors", "Pacers"], 1);
var brandonIngram = createPlayer(["Brandon Ingram", "BI", "Ingram"], 19.4, 4.3, 5.2, ["Lakers", "Pelicans"], 0);
var mikalBridges = createPlayer(["Mikal Bridges", "The Warden", "Bridges"], 14.5, 2.5, 4.2, ["Suns", "Nets", "Knicks"], 0);
var traeYoung = createPlayer(["Trae Young", "Ice Trae", "Trae"], 25.5, 9.3, 3.6, ["Hawks"], 0);
var scottieBarnes = createPlayer(["Scottie Barnes", "Scottie", "Barnes", "The Special One"], 16.7, 4.4, 7.4, ["Raptors"], 0);
var jrueHoliday = createPlayer(["Jrue Holiday", "Jrue", "Holiday"], 16.1, 6.4, 4.1, ["76ers", "Pelicans", "Bucks", "Celtics"], 2);
var chetHolmgren = createPlayer(["Chet Holmgren", "The Unicorn", "Chet", "Holmgren"], 16.5, 2.6, 7.9, ["Thunder"], 0);
var lauriMarkkanen = createPlayer(["Lauri Markkanen", "The Finnisher", "Markkanen"], 23.2, 2.0, 8.2, ["Bulls", "Cavaliers", "Jazz"], 0);
var rudyGobert = createPlayer(["Rudy Gobert", "The Stifle Tower", "Gobert"], 13.7, 0.9, 12.9, ["Jazz", "Timberwolves"], 0);
var jamalMurray = createPlayer(["Jamal Murray", "Blue Arrow", "Murray"], 20.0, 6.6, 4.1, ["Nuggets"], 1);
var victorWembanyama = createPlayer(["Victor Wembanyama", "Wemby", "Wembanyama"], 21.4, 3.9, 10.6, ["Spurs"], 0);
var jalenBrunson = createPlayer(["Jalen Brunson", "Brunson"], 27.4, 6.7, 3.6, ["Mavericks", "Knicks"], 0);
var anthonyDavis = createPlayer(["Anthony Davis", "AD", "The Brow"], 24.7, 3.5, 12.6, ["Pelicans", "Lakers", "Mavericks"], 1);
var lukaDoncic = createPlayer(["Luka Doncic", "Luka Magic", "Luka", "Doncic"], 33.9, 9.8, 9.2, ["Mavericks", "Lakers"], 0);
var sga = createPlayer(["Shai Gilgeous-Alexander", "SGA"], 30.1, 6.3, 5.5, ["Clippers", "Thunder"], 0);
var jaylenBrown = createPlayer(["Jaylen Brown"], 23.0, 3.6, 5.5, ["Celtics"], 0);
var devinBooker = createPlayer(["Devin Booker", "Book", "Booker"], 27.1, 6.9, 4.5, ["Suns"], 0);
var joelEmbiid = createPlayer(["Joel Embiid", "The Process", "Embiid"], 34.7, 5.6, 11.0, ["76ers"], 0);
var tyreseHaliburton = createPlayer(["Tyrese Haliburton", "Hali", "Tyrese"], 20.1, 10.9, 3.9, ["Kings", "Pacers"], 0);
var bamAdebayo = createPlayer(["Bam Adebayo", "Bam"], 19.3, 3.9, 10.4, ["Heat"], 0);
var jaMorant = createPlayer(["Ja Morant", "Ja"], 25.1, 8.1, 5.6, ["Grizzlies"], 0);
var anthonyEdwards = createPlayer(["Anthony Edwards", "Ant", "Ant-Man"], 25.9, 5.1, 5.4, ["Timberwolves"], 0);
var kawhiLeonard = createPlayer(["Kawhi Leonard", "The Klaw", "Kawhi"], 23.7, 3.6, 6.1, ["Spurs", "Raptors", "Clippers"], 2);
var damianLillard = createPlayer(["Damian Lillard", "Dame", "Dame Time", "Lillard"], 24.3, 7.0, 4.4, ["Trail Blazers", "Bucks"], 0);
var paoloBanchero = createPlayer(["Paolo Banchero", "Paolo", "Banchero"], 22.6, 5.4, 6.9, ["Magic"], 0);
var deaaronFox = createPlayer(["De'Aaron Fox", "Swipa", "Fox", "D Fox"], 26.6, 5.6, 4.6, ["Kings", "Spurs"], 0);
var zionWilliamson = createPlayer(["Zion Williamson", "Zion", "Zanos"], 22.9, 5.0, 5.8, ["Pelicans"], 0);
var jimmyButler = createPlayer(["Jimmy Butler", "Butler", "Jimmy G Buckets", "Himmy Butler"], 20.8, 5.0, 5.3, ["Bulls", "Timberwolves", "76ers", "Heat", "Warriors"], 0);
var karlAnthonyTowns = createPlayer(["Karl-Anthony Towns", "KAT"], 21.8, 3.0, 8.3, ["Timberwolves", "Knicks"], 0);
var domantasSabonis = createPlayer(["Domantas Sabonis", "Sabonis"], 19.4, 8.2, 13.7, ["Thunder", "Pacers", "Kings"], 0);
// Randomizer function
function getRandomPlayer(players) {
    var index = Math.floor(Math.random() * players.length);
    return players[index];
}
// Game logic
function playGame(players) {
    var mysteryPlayer = getRandomPlayer(players);
    var attempts = 0; // Start with
    var maxAttempts = 5; // Max
    console.log("Welcome to Elite Ball Knowledge (Guess the NBA Player)!");
    console.log("You have 5 attempts to guess the player based on the clues provided.\n");
    var _loop_1 = function () {
        console.log("\nAttempt ".concat(attempts + 1, " of ").concat(maxAttempts));
        console.log("Points per Game: ".concat(mysteryPlayer.pointsPerGame));
        console.log("Assists per Game: ".concat(mysteryPlayer.assistsPerGame));
        console.log("Rebounds per Game: ".concat(mysteryPlayer.reboundsPerGame));
        if (attempts >= 3) {
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
// Launch the game with a player pool still trying to figure out how to do this better
var players = [
    lebron,
    curry,
    giannis,
    tatum,
    durant,
    jokic,
    joelEmbiid,
    tyreseHaliburton,
    bamAdebayo,
    jaMorant,
    anthonyEdwards,
    kawhiLeonard,
    damianLillard,
    paoloBanchero,
    deaaronFox,
    zionWilliamson,
    jimmyButler,
    karlAnthonyTowns,
    domantasSabonis,
    lukaDoncic,
    sga,
    devinBooker,
    chetHolmgren,
    lauriMarkkanen,
    rudyGobert,
    jamalMurray,
    victorWembanyama,
    jalenBrunson,
    anthonyDavis,
    jaylenBrown,
    kyrieIrving,
    paulGeorge,
    pascalSiakam,
    brandonIngram,
    mikalBridges,
    traeYoung,
    scottieBarnes,
    jrueHoliday,
    lamelo,
    juliusRandle,
    evanMobley,
    donovanMitchell,
    kristapsPorzingis,
    demarDerozan,
    russellWestbrook,
    jamesHarden
];
playGame(players);
