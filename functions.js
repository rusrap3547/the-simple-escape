// Randomizer function for the game
export function randomChoice() {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}


//slow print by line function
export function printLineByLine(text, delay = 2000) {
	const lines = text.split("\n");
	for (let index = 0; index < lines.length; index++) {
		setTimeout(function () {
			console.log(lines[index]);
		}, delay * index); // Delay adjusted for each line
	}
}

//testing a process
import readline from "readline";

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

// async function main() {
// 	console.log("First process...");
// 	await waitForEnter();
// 	console.log("Second process...");
// 	await waitForEnter();
// 	console.log("Third process...");
// 	rl.close();
// }

//Need to add a function for inventory, Array? Object?
export function inventory() {
	const inventory = [];
	return inventory;
}

export function takeItem(item) {
	inventory.push(item);
	return inventory;
}
