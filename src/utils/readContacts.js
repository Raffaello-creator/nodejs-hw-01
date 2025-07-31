import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const readContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};
