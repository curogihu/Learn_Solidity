const path = require('path');
const fs = require('fs');

const inboxPath = path.resolve(__dirname, 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

solc.compile(source, 1);