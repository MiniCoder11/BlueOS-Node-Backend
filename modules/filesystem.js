// Module definitions

const fs = require("fs");

function replaceContents(file, data) {
	// Replaces the contents of the given file with the given data.
	fs.writeFileSync(file, data);
}

function getContents(file) {
	// Gets the contents of the given file.
	return(fs.readFileSync(file));
}

exports.replaceContents = replaceContents;
exports.getContents = getContents;