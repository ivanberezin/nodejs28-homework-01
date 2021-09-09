const contactsList = require('./contactsList');
const updateContacts = require('./updateContacts');

async function removeContact(contactId) {
    try {
        const contactIdJSON = JSON.parse(contactId);
        console.log(contactIdJSON);
        const contactsJSON = await contactsList();
        const contactFindById = contactsJSON.find(contact => contact.id === contactIdJSON);
        if (!contactFindById) {
            return console.log(`Contact with id=${contactIdJSON} not found !`);
        }
        const contactsFilteredJSON = contactsJSON.filter(contact => contact.id !== contactIdJSON);
        await updateContacts(contactsFilteredJSON);
        return contactsFilteredJSON;
    } catch (error) {
        throw error;
    }
  }

  module.exports = removeContact;