if (true) {
	/*
	If you're new here or just stopping by to take a look around,
	we'd strongly recommend that you stop by Instructions/README.md
	first to see what this project is all about. If you are confident
	in what you are doing, feel free to improve upon our work,
	otherwise, please do not tamper with anything that you do not
	completely understand so that this project remains in
	functioning condition.
	
	Thanks for stopping by,
	
		MiniCoder11 & Visqosity :)
		
	*/
}

// Local Imports
log = require("./modules/common-utilities.js").log;

log("Importing local modules...");

buffer = require("./modules/string-utilities.js").buffer;
encodeString = require("./modules/string-utilities.js").encodeString;
decodeString = require("./modules/string-utilities.js").decodeString;
packetParse = require("./modules/parse-utilities.js").packetParse;
const accounts = require("./apps/accounts.js");
const server = require("./server.js");

log("Successfully initialized local server components");
log("Importing external modules...");


var fakePacket = "Visqosity,1,accounts,passwordVerify,ThisIsAPassword";
console.log(packetParse(fakePacket));
log(server.handoff(packetParse(fakePacket)), "passwordVerify");

// External imports
const scratch = require("node-scratch-client");
// const fetch = require("node-fetch"); Commented out to improve loading times. Uncomment if needed.

log("Successfully initialized external server components")
log("Establishing connection to scratch...")

// Session validation
const Client = new scratch.Client({
	username: 'Visqosity',
	password: process.env.SCRATCH_PASSWORD
});

// Setup
const projectID = '478177176';

log("Connection to servers established!")

// Session start and event loop
Client.login().then(() => {
	let cloud = Client.session.createCloudSession(projectID);

	cloud.connect().then(() => {
		cloud.on("set", variable => {
			console.log("[" + variable.name.slice(2) + "]: " + decodeString(variable.value));
			cloud.set(variable.name, server.handoff(packetParse(decodeString(variable.value))))
		});
	});
});