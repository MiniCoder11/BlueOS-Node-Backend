## Creating a Server Application

The BlueOS Node Backend was redesigned from scratch to be as modular and changable as possible. Keeping up with this goal, the server runs applications as individual JavaScript files that  are placed within the `./apps` directory. You can follow these simple instructions to create an application.

### Setting Things Up:
1. Create a new file with the `.js` suffix in the `./apps` folder.
2. Start with the basic code:

```js
// Updated <Date: M DD, YYYY>
// Authored by <Username(s)>

// Local imports
// <Place all of your local imports here in the place of this comment>

// Application definition
function application() { 
	// Place all cases into this main function
	// This is the *only* function that will be called by the server
}

// <Define all of your helper functions here>

// Helper function exports
// exports.<functionname> = <functionname>;

// Application export
exports.application = application;
```

###### You should remove all comments that contain the`<` and `>` characters and replace them with actual values. Comments that do not contain those characters are standard documentation and we do not recommend removing them (unless you know exactly what you are doing or improving upon), so that the file remains readable to others.

3. Next, to implement you application, add the following to `./server.js`:
```js
if (packet.application = <YOUR_APPLICATION_NAME_HERE>) {
	return(<YOUR_APPLICATION_EXPORT_NAME_HERE>.application(<YOUR_APPLICATION_INPUTS_HERE>));
}
```

4. Done! (Yes, it was that easy!)



