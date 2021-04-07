// Updated February 16, 2021
// Authored by MiniCoder11 & Visqosity

// Local imports
const fs = require("../modules/filesystem.js");

// Application definition
var userAccounts = {};
refresh();

function createAccount(username, password, passwordType) {
	// Create an account with the credentials provided.
	userAccounts[username] = { "type": passwordType, "password": password };
	fs.replaceContents("./persistent/userAccounts.json", JSON.stringify(userAccounts));
}

function removeAccount(username, password) {
	refresh();
	if (queryAccount(username)) {
		if (checkPassword(username, password)) {
		// Remove account because the user gave correct credentials.
		delete userAccounts[username];
		backup();
		}
	}
}

function queryAccount(username) {
	// Check if userAccounts contains the username.
	refresh();
	return (!(userAccounts[username] == undefined));
}

function checkPassword(username, password) {
	// Check if the password passed in matches the password assigned to the username in the object.'
	refresh();
	if (queryAccount(username)) {
		return (userAccounts[username]["password"] == password);
	}	
}

function modifyPassword(username, password, newPassword) {
	// Set their password to the new password.
	refresh();
	if (queryAccount(username)) {
		if (checkPassword(username, password)) {
		userAccounts[username]["password"] = newPassword;
		backup();
		}
	}
}

function getPasswordType(username) {
	// Returns password type
	refresh();
	if (queryAccount(username)) {
		return(userAccounts[username]["type"]);
	}	
}

function list() { 
	// List all usernames
	refresh();
	for (var key in userAccounts) {
		console.log(key);
	}
}

function backup() {
	fs.replaceContents("./persistent/userAccounts.json", JSON.stringify(userAccounts));
}

function refresh() {
	userAccounts = JSON.parse(fs.getContents("./persistent/userAccounts.json"));
}

function application(action, username, password, newPassword) {
	// The complete application wrapper
	if (action == "passwordVerify") {
		return(checkPassword(username, password));
	} else if (action == "modifyPassword") {
		modifyPassword(username, password, newPassword);
	} else if (action == "createAccount") {
		createAccount(username, password, newPassword);
	} else if (action == "passwordGetType") {
		return(getPasswordType(username));
	} else if (action == "queryAccount") {
		return(queryAccount(username));
	} else {
		return("INVALID_ACTION_ARGUMENT");
	}
}

// Function exports
exports.createAccount = createAccount;
exports.removeAccount = removeAccount;
exports.queryAccount = queryAccount;
exports.checkPassword = checkPassword;
exports.modifyPassword = modifyPassword;
exports.getPasswordType = getPasswordType;
exports.list = list;
exports.backup = backup;

// Application export
exports.application = application;