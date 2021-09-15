const { program } = require('commander');

const contacts = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      await contacts.contactsList().then(data => console.table(data));
      break;

    case 'get':
      await contacts.getContactById(id).then(data => console.table(data));
      break;

    case 'add':
      await contacts.addContact(name, email, phone).then(data => console.table(data));
      break;

    case 'remove':
      await contacts.removeContact(id).then(data => console.table(data));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);