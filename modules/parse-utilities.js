// Module definitions

function packetParse(input) {
	var packet = input.split(',');
	packet = {
		"sender": packet[0],
		"target": packet[1],
		"application": packet[2],
		"type": packet[3],
		"contents": input.substring(packet[0].length + packet[1].length + packet[2].length + packet[3].length + 4, input.length)
		}
	return(packet);
	}

exports.packetParse = packetParse;