import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "first_number",
        message: "Enter your first number: ",
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter your second number:",
    },
    { type: "list",
        name: "operator",
        message: "please select operation type:",
        choices: ["addition", "subtraction", "multipilcation", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.first_number + answer.second_number);
}
else if (answer.operator === "subtraction") {
    console.log(answer.first_number - answer.second_number);
}
else if (answer.operator === "multiplication") {
    console.log(answer.first_number * answer.second_number);
}
else if (answer.operator === "division") {
    console.log(answer.first_number / answer.second_number);
}
