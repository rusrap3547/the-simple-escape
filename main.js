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

import { printLineByLine, inventory, takeItem } from "./functions.js";
import { openingScene } from "./library.js";
// const superCall = runCommand(runCommand);
const printTextSlow = printLineByLine();
const playerInventory = inventory(inventory);
const newItem = takeItem(Item);

inquirer
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

// Opening Scene
const introSequence = openingScene.description;
printLineByLine(introSequence, 2000);
