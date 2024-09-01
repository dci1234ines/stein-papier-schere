const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ['Stein', 'Papier', 'Schere'];
const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Unentschieden';
  } else if (
    (userChoice === 'Stein' && computerChoice === 'Schere') ||
    (userChoice === 'Papier' && computerChoice === 'Stein') ||
    (userChoice === 'Schere' && computerChoice === 'Papier')
  ) {
    return 'Du gewinnst!';
  } else {
    return 'Computer gewinnt!';
  }
};

console.log("Willkommen zu Stein, Papier, Schere!");

console.log("Gib deine Wahl ein: Stein, Papier oder Schere");

rl.question('Deine Wahl: ', (userInput) => {
  const userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
  if (!choices.includes(userChoice)) {
    console.log("Ungültige Wahl. Bitte wähle zwischen Stein, Papier und Schere.");
  }
  else {
    const computerChoice = getRandomChoice();
    console.log(`Computer wählt: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  }

  rl.close();
  
});

















