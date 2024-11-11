// Randomizer function for the game
function randomChoice() {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Randomizer function for the game
function randomChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to track if a command has been run before
const commandHistory = {};

function runCommand(command) {
  if (commandHistory[command]) {
    console.log(`The command "${command}" has already been run.`);
    return;
  }

  // Execute the command
  console.log(`Running command: ${command}`);

  // Mark the command as run
  commandHistory[command] = true;
}

//slow print by line function
function printLineByLine(text, delay = 2000) {
  const lines = text.split("\n");
  for (let index = 0; index < lines.length; index++) {
    setTimeout(function () {
      return console.log(lines[index]);
    }, delay);
  }
}

//testing a process
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function waitForEnter() {
  return new Promise((resolve) => {
    rl.question("Press Enter to continue...", () => {
      resolve();
    });
  });
}

async function main() {
  console.log("First process...");
  await waitForEnter();
  console.log("Second process...");
  await waitForEnter();
  console.log("Third process...");
  rl.close();
}
