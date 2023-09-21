const fs = require('fs');
// Replace these file paths with your actual file paths
const inputFile = 'input.js';
const outputFile = 'output.js';
// Read the contents of the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Error reading input file:', err);
 return;
}
// Write the contents to the output file
 fs.writeFile(outputFile, data, 'utf8', (err) => {
 if (err) {
 console.error('Error writing to output file:', err);
 return;
 }
 
 console.log('Contents of input file have been successfully written to output file.');
});
 });