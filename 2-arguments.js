// 2-arguments.js
const arg = process.argv;

if (arg[2] === undefined) {
  console.log("No argument");
} else if (arg[3] === undefined) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
// This code checks if a command line argument is provided. If not, it prints "No argument". If an argument is provided, it prints the argument itself.