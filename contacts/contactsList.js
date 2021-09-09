const fsPromises = require('fs').promises;

const contactsPath = require('./contactsPath');

async function contactsList() {
  try {
    const contacts = await fsPromises.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
  } catch (error) {
    throw error;
  }
}

  module.exports = contactsList;