const readline = require('readline');
const fs = require('fs');

const args = process.argv;
const inputFile = args[2];
const outputFile = args[3];

const readInterface = readline.createInterface({
	input: fs.createReadStream(inputFile),
	output: process.stdout,
	console: false
});

let newFile = '';

readInterface.on('line', line => {

	const split = line.split('');

	if (split[split.length - 1] !== ';') {
		split.push(';');
	}

	newFile += split.join('');
	newFile += '\n';

}).on('close', () => {
	fs.writeFile(outputFile, newFile, (err) => {
		if (err) throw err;
	});

	console.log('The file has been saved');
});
