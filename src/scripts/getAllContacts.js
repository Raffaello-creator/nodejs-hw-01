import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    if (data.trim().length > 0) {
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Contacts file does not exist. Returning an empty array.');
      return [];
    } else {
      console.error('Failed to read contacts:', error);
      throw error;
    }
  }
};

console.log(await getAllContacts());
