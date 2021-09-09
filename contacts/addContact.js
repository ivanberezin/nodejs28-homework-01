const contactsList = require('./contactsList');
const updateContacts = require('./updateContacts');

async function addContact(name, email, phone) {
    try {
        const contactsJSON = await contactsList();
        const contactFindByName = contactsJSON.find(contact => contact.name === name);
        const contactFindByEmail = contactsJSON.find(contact => contact.email === email);
        if (contactFindByName && contactFindByEmail) {
            return console.log("Contact is already in db!");
        }
        const id = contactsJSON.length + 1;
        const newContact = {id, name, email, phone};
        contactsJSON.push(newContact);
        await updateContacts(contactsJSON);
        return newContact;
    } catch (error) {
        throw error;
    }
  }

  module.exports = addContact;