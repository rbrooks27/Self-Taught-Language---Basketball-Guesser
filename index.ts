// Import a sync input module
const input = require('prompt-sync')();

// Define the interface to help make stats
interface Player {
  name: string[];
  pointsPerGame: number;
  assistsPerGame: number;
  reboundsPerGame: number;
  teams: string[];
  championships: number;
}

// Helper function to create a player
function createPlayer(
  name: string[],
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
  ["LeBron James", "King James", "Lebron", "LBJ", "The Goat"],
  27.2, // Points
  7.3, // Assists
  7.5, // Rebounds
  ["Cavaliers", "Heat", "Lakers"], // Teams Played For
  4 // Championships
);

const curry = createPlayer(
  ["Stephen Curry", "Steph", "Chef Curry", "Splash Brother"],
  24.8,
  6.4,
  4.7,
  ["Warriors"],
  4
);

const tatum = createPlayer(
    ["Jayson Tatum", "JT", "Taco Jay", "Tatum"],
    26.4,
    4.3,
    8.1,
    ["Celtics"],
    0
  );

const giannis = createPlayer(
    ["Giannis Antetokounmpo", "Greek Freak", "Giannis"],
    29.5,
    5.9,
    11.2,
    ["Bucks"],
    1
  );
  
  const jokic = createPlayer(
    ["Nikola Jokic", "Joker", "Jokic"],
    26.4,
    9.0,
    12.4,
    ["Nuggets"],
    1
  );
  
  const durant = createPlayer(
    ["Kevin Durant", "KD", "Slim Reaper", "Durant"],
    27.1,
    5.6,
    7.1,
    ["Thunder", "Warriors", "Nets", "Suns"],
    2
  );

  const lamelo = createPlayer(
    ["LaMelo Ball", "Melo", "Ball", "LaMelo"],
    26.7,
    7.1,
    5.1,
    ["Hornets"],
    0
  );
  
  const juliusRandle = createPlayer(
    ["Julius Randle", "Randle"],
    19.1,
    3.7,
    9.4,
    ["Lakers", "Pelicans", "Knicks"],
    0
  );
  
  const evanMobley = createPlayer(
    ["Evan Mobley", "Mobley"],
    16.3,
    2.9,
    9.0,
    ["Cavaliers"],
    0
  );
  
  const donovanMitchell = createPlayer(
    ["Donovan Mitchell", "Spida", "D Mitch", "Mitchell"],
    24.8,
    4.5,
    4.3,
    ["Jazz", "Cavaliers"],
    0
  );
  
  const kristapsPorzingis = createPlayer(
    ["Kristaps Porzingis", "The Unicorn", "Porzingis"],
    19.6,
    1.8,
    7.9,
    ["Knicks", "Mavericks", "Wizards", "Celtics"],
    0
  );
  
  const demarDerozan = createPlayer(
    ["DeMar DeRozan", "Deebo", "Mr. I Am Toronto", "DeRozan", "Demar"],
    21.3,
    4.1,
    4.4,
    ["Raptors", "Spurs", "Bulls", "Kings"],
    0
  );
  
  const russellWestbrook = createPlayer(
    ["Russell Westbrook", "The Brodie", "Beastbrook", "Mr. Triple Double", "Russ", "Westbrook"],
    21.3,
    8.1,
    7.1,
    ["Thunder", "Rockets", "Wizards", "Lakers", "Clippers", "Nuggets"],
    0
  );
  
  const jamesHarden = createPlayer(
    ["James Harden", "The Beard", "Harden"],
    24.1,
    7.0,
    5.6,
    ["Thunder", "Rockets", "Nets", "76ers", "Clippers"],
    0
  );

  const paulGeorge = createPlayer(
    ["Paul George", "PG13", "PG"],
    20.8,
    3.7,
    6.3,
    ["Pacers", "Thunder", "Clippers"],
    0
  );
  
  const kyrieIrving = createPlayer(
    ["Kyrie Irving", "Uncle Drew", "Kyrie"],
    23.4,
    5.7,
    3.9,
    ["Cavaliers", "Celtics", "Nets", "Mavericks"],
    1
  );
  
  const pascalSiakam = createPlayer(
    ["Pascal Siakam", "Spicy P", "Siakam", "Pascal"],
    17.7,
    4.4,
    6.6,
    ["Raptors", "Pacers"],
    1
  );
  
  const brandonIngram = createPlayer(
    ["Brandon Ingram", "BI", "Ingram"],
    19.4,
    4.3,
    5.2,
    ["Lakers", "Pelicans"],
    0
  );
  
  const mikalBridges = createPlayer(
    ["Mikal Bridges", "The Warden", "Bridges"],
    14.5,
    2.5,
    4.2,
    ["Suns", "Nets", "Knicks"],
    0
  );
  
  const traeYoung = createPlayer(
    ["Trae Young", "Ice Trae", "Trae"],
    25.5,
    9.3,
    3.6,
    ["Hawks"],
    0
  );
  
  const scottieBarnes = createPlayer(
    ["Scottie Barnes", "Scottie", "Barnes", "The Special One"],
    16.7,
    4.4,
    7.4,
    ["Raptors"],
    0
  );
  
  const jrueHoliday = createPlayer(
    ["Jrue Holiday", "Jrue", "Holiday"],
    16.1,
    6.4,
    4.1,
    ["76ers", "Pelicans", "Bucks", "Celtics"],
    2
  );
  
  const chetHolmgren = createPlayer(
    ["Chet Holmgren", "The Unicorn", "Chet", "Holmgren"],
    16.5,
    2.6,
    7.9,
    ["Thunder"],
    0
  );
  
  const lauriMarkkanen = createPlayer(
    ["Lauri Markkanen", "The Finnisher", "Markkanen"],
    23.2,
    2.0,
    8.2,
    ["Bulls", "Cavaliers", "Jazz"],
    0
  );
  
  const rudyGobert = createPlayer(
    ["Rudy Gobert", "The Stifle Tower", "Gobert"],
    13.7,
    0.9,
    12.9,
    ["Jazz", "Timberwolves"],
    0
  );
  
  const jamalMurray = createPlayer(
    ["Jamal Murray", "Blue Arrow", "Murray"],
    20.0,
    6.6,
    4.1,
    ["Nuggets"],
    1
  );
  
  const victorWembanyama = createPlayer(
    ["Victor Wembanyama", "Wemby", "Wembanyama"],
    21.4,
    3.9,
    10.6,
    ["Spurs"],
    0
  );
  
  const jalenBrunson = createPlayer(
    ["Jalen Brunson", "Brunson"],
    27.4,
    6.7,
    3.6,
    ["Mavericks", "Knicks"],
    0
  );
  
  const anthonyDavis = createPlayer(
    ["Anthony Davis", "AD", "The Brow"],
    24.7,
    3.5,
    12.6,
    ["Pelicans", "Lakers", "Mavericks"],
    1
  );
  
  const lukaDoncic = createPlayer(
    ["Luka Doncic", "Luka Magic", "Luka", "Doncic"],
    33.9,
    9.8,
    9.2,
    ["Mavericks", "Lakers"],
    0
  );
  
  const sga = createPlayer(
    ["Shai Gilgeous-Alexander", "SGA"],
    30.1,
    6.3,
    5.5,
    ["Clippers", "Thunder"],
    0
  );
  
  const jaylenBrown = createPlayer(
    ["Jaylen Brown"],
    23.0,
    3.6,
    5.5,
    ["Celtics"],
    0
  );
  
  const devinBooker = createPlayer(
    ["Devin Booker", "Book", "Booker"],
    27.1,
    6.9,
    4.5,
    ["Suns"],
    0
  );

  const joelEmbiid = createPlayer(
    ["Joel Embiid", "The Process", "Embiid"],
    34.7,
    5.6,
    11.0,
    ["76ers"],
    0
  );
  
  const tyreseHaliburton = createPlayer(
    ["Tyrese Haliburton", "Hali", "Tyrese"],
    20.1,
    10.9,
    3.9,
    ["Kings", "Pacers"],
    0
  );
  
  const bamAdebayo = createPlayer(
    ["Bam Adebayo", "Bam"],
    19.3,
    3.9,
    10.4,
    ["Heat"],
    0
  );
  
  const jaMorant = createPlayer(
    ["Ja Morant", "Ja"],
    25.1,
    8.1,
    5.6,
    ["Grizzlies"],
    0
  );
  
  const anthonyEdwards = createPlayer(
    ["Anthony Edwards", "Ant", "Ant-Man"],
    25.9,
    5.1,
    5.4,
    ["Timberwolves"],
    0
  );
  
  const kawhiLeonard = createPlayer(
    ["Kawhi Leonard", "The Klaw", "Kawhi"],
    23.7,
    3.6,
    6.1,
    ["Spurs", "Raptors", "Clippers"],
    2
  );
  
  const damianLillard = createPlayer(
    ["Damian Lillard", "Dame", "Dame Time", "Lillard"],
    24.3,
    7.0,
    4.4,
    ["Trail Blazers", "Bucks"],
    0
  );
  
  const paoloBanchero = createPlayer(
    ["Paolo Banchero", "Paolo", "Banchero"],
    22.6,
    5.4,
    6.9,
    ["Magic"],
    0
  );
  
  const deaaronFox = createPlayer(
    ["De'Aaron Fox", "Swipa", "Fox", "D Fox"],
    26.6,
    5.6,
    4.6,
    ["Kings", "Spurs"],
    0
  );
  
  const zionWilliamson = createPlayer(
    ["Zion Williamson", "Zion", "Zanos"],
    22.9,
    5.0,
    5.8,
    ["Pelicans"],
    0
  );
  
  const jimmyButler = createPlayer(
    ["Jimmy Butler", "Butler", "Jimmy G Buckets", "Himmy Butler"],
    20.8,
    5.0,
    5.3,
    ["Bulls", "Timberwolves", "76ers", "Heat", "Warriors"],
    0
  );
  
  const karlAnthonyTowns = createPlayer(
    ["Karl-Anthony Towns", "KAT"],
    21.8,
    3.0,
    8.3,
    ["Timberwolves", "Knicks"],
    0
  );
  
  const domantasSabonis = createPlayer(
    ["Domantas Sabonis", "Sabonis"],
    19.4,
    8.2,
    13.7,
    ["Thunder", "Pacers", "Kings"],
    0
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
  const maxAttempts = 5; // Max

  console.log("Welcome to Elite Ball Knowledge (Guess the NBA Player)!");
  console.log("You have 5 attempts to guess the player based on the clues provided.\n");

  while (attempts < maxAttempts) {
    console.log(`\nAttempt ${attempts + 1} of ${maxAttempts}`);
    console.log(`Points per Game: ${mysteryPlayer.pointsPerGame}`);
    console.log(`Assists per Game: ${mysteryPlayer.assistsPerGame}`);
    console.log(`Rebounds per Game: ${mysteryPlayer.reboundsPerGame}`);

    if (attempts >= 3) {
      console.log(`Teams Played For: ${mysteryPlayer.teams.join(", ")}`);
      console.log(`Championships Won: ${mysteryPlayer.championships}`);
    }

    const userGuess = input("Your Guess: ").trim().toLowerCase();

    if (mysteryPlayer.name.some((name) => name.toLowerCase() === userGuess)) {
      console.log("\n Correct! You guessed the player!");
      return;
    } else {
      console.log(" Incorrect guess.");
    }

    attempts++;
  }

  console.log(`\nOut of attempts! The correct answer was: ${mysteryPlayer.name[0]}`);
}

// Launch the game with a player pool still trying to figure out how to do this better
const players: Player[] = [
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
  
// Game loop to allow replaying
while (true) {
  playGame(players);

  const again = input("\nWould you like to play again? (yes/no): ").trim().toLowerCase();
  if (again !== "yes" && again !== "y") {
    console.log("Thanks for playing Elite Ball Knowledge! See you next time!");
    break;
  }
}
