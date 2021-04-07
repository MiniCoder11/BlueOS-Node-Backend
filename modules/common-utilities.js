// Local imports
buffer = require("./string-utilities.js").buffer;
encoder = require("./string-utilities.js");
fs = require("./filesystem.js");

// Module definitions

// Object initializations
var time = new Date();
var delay = true;

function log(text, level) {
	// Log a time-stamped/formatted message to the console
	if (level == undefined) {
		console.log("[" + getTime() + " / " + "Info" + "]: " + text);
	} else {
		console.log("[" + getTime() + " / " + level + "]: " + text);
	}
}

function getTime() {
	// Returns the time in the HH:MM:SS format
	return(buffer(time.getHours()) + ":" + buffer(time.getMinutes()) + ":" + buffer(time.getSeconds()));
}

function quickEncode(input) {
	encoder.encodeString(input)
}

exports.log = log;
exports.getTime = getTime;