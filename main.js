// inquirer
//   .prompt([
//     {
//       name: "user_name",
//       type: "input",
//       message: "What is your name?",
//     },
//   ])
//   .then((answer) => {
//     console.log("Hello " + answer.user_name);
//   });

import inquirer from "inquirer";

import { printLineByLine } from "./functions.js";
import { openingScene } from "./library.js";
import { entryHall } from "./library.js";
// const superCall = runCommand(runCommand);
// const playerInventory = inventory(inventory);
// const newItem = takeItem(Item);
const introSequence = openingScene.description;

// Opening Scene
await printLineByLine(introSequence, 2000);

//Intro conversation
await inquirer
  .prompt([
    {
      name: "player_name",
      type: "input",
      message: "Oh, its someone new, what is your name?",
    },
  ])
  .then(
    (answer) =>
      "Hello " +
      answer.player_name +
      " welcome to the Blackwood Mansion. I am the butler and I will be here to help you through your journey. Do you know why you are here?"
  );
