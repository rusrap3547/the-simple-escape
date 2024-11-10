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
