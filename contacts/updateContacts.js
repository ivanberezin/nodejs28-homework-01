const fsPromises = require('fs').promises;

const contactsPath = require('./contactsPath');

async function updateContacts(contacts) {
    const contactsSTR = JSON.stringify(contacts);
    await fsPromises.writeFile(contactsPath, contactsSTR);
}

module.exports = updateContacts;