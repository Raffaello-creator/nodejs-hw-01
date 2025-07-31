import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    if (data.trim().length > 0) {
      const contacts = JSON.parse(data);
      if (contacts.length > 0) {
        contacts.pop(); // Remove the last contact
        await writeContacts(contacts);
        console.log('Last contact has been removed.');
      } else {
        console.log('No contacts to remove.');
      }
    } else {
      console.log('Contacts file is empty. Nothing to remove.');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Contacts file does not exist. Nothing to remove.');
    } else {
      console.error('Failed to remove last contact:', error);
    }
  }
};

removeLastContact();
