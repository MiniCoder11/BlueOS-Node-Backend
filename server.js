// Server definitions

/*
* [
*	"MiniCoder11",
* "1",
* "accounts",
* "passwordVerify",
* "Cheese"
* ]
*/

// Application registry
accounts = require("./apps/accounts.js")

// if (packet.application = weather) {
//   return(weatherApp.application(city));
// }

// Execution
function handoff(packet) {
	if (packet.target == process.env.SERVER_ID) {
		// Verifies the packet was meant for this instance of the server
		if (packet.application = "accounts") {
			return(accounts.application(packet.type, packet.sender, packet.contents));
		}
	}
}

exports.handoff = handoff;