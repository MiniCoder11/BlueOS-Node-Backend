// Module definitions

function buffer(input) {
	return (String('0' + input).slice(-2));
}

function encodeString(input) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?"
	var result = '';
	for (i in input) {
		result += buffer(alphabet.indexOf(input[i]) + 1);
	}
	return (result)
}

function decodeString(input) {
	const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?"
	var result = '';
	for (var i = 0; i < input.length; i += 2) {
		result += alphabet[Number(input.substring(Number(i), Number(i) + 2)) - 1];
	}
	return (result);
}

exports.buffer = buffer;
exports.encodeString = encodeString;
exports.decodeString = decodeString;