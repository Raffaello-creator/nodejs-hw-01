import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    await fs.promises.access(PATH_DB);

    await writeContacts([]);
    console.log('All contacts have been removed.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Contacts file does not exist. Nothing to remove.');
    } else {
      console.error('Failed to remove contacts:', error);
    }
  }
};

removeAllContacts();
