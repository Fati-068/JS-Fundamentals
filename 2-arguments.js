const args = process.argv;

if (args [2] === undefined) {
    console.log("No argument");
} else if (args[3] === undefined) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
// This code checks the command line arguments passed to the script.
