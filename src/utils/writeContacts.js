import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.promises.writeFile(PATH_DB, data);
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
