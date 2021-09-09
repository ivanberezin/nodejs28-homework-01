const contactsList = require('./contactsList');

async function getContactById(contactId) {
    try {
        const contactIdJSON = JSON.parse(contactId);
        const contactsJSON = await contactsList();
        const contactFoundById = contactsJSON.find(contact => contact.id === contactIdJSON);
        if (!contactFoundById) {throw new Error(`Contact with id=${contactId} not found`);}
        return contactFoundById;
    } catch (error) {
        throw error;
    }
}

  module.exports = getContactById;