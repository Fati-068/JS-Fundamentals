// 3-concat.js
// 3-value_argument.js

const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
// This code checks if a command line argument is provided. 
// If not, it prints "No argument". 
// If an argument is provided, it prints the argument itself.