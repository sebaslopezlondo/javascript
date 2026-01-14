const fs = require("fs");

const dataField = fs.readFileSync("example.txt", "utf8");
console.log("File content: ", dataField);
