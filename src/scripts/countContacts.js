import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
export const countContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    if (data.trim().length > 0) {
      const contacts = JSON.parse(data);
      return contacts.length;
    }
    return 0; // If file is empty or does not exist, return 0
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Contacts file does not exist. Returning count as 0.');
      return 0;
    } else {
      console.error('Failed to read contacts:', error);
      throw error;
    }
  }
};
console.log(await countContacts());
