## Scratch Server Backend System

The goal of this Repl is to provide a reliable, self-sustaining database system that can be hosted from any browser and still manage to support all Blue OS users at high speeds from a number of connection points.

### Current project members:
 - MiniCoder11
 - Visqosity

#### Assistants Members
 - 1132262
 - LordofKhan
 - I8D


### Dependencies:
Currently, the only two components required to run this server are a working Node.js instance and an installation of `node-scratch-client` which can be easily installed onto any Node-compatible machine by using the built-in package manager and running `npm install node-scratch-client` in the console.

## Documentation
Documentation is in progress. There is nothing helpful here at this time.


### Headers
The header system verifies that messages sent between clients and servers all end up going to their respective targets and no one else. A header is just a small object at the beginning of each packet formatted as `username`, `targetID`, `application`, `packetType`, `packetContents` where `username` is a string containing the sender's username, `targetID` is the numerical ID assigned to the target server, `packetType` is the type or class of the current packet, `application` is the server-side application that the packet is addressed to, and `packetContents` is the complete contents of the packet.

### Content
All text after the fourth comma in the header up to the length limit of the cloud variable will be treated as the packet's content. The packet's content can take any form other than a single-digit integer. If the packet's content is a single-digit integer, it will be treated as a connection parameter.

### Connection Parameters
Nothing is available in this section yet.