#!/usr/bin/env node
import inquirer from "inquirer";
console.log("CLI number guessing game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5);",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! you guess a correct number.");
}
else {
    console.log("sorry, you guess  rong number.");
}
