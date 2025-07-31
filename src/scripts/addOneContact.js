import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  let existingContacts = [];
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf-8');
    if (data.trim().length > 0) {
      existingContacts = JSON.parse(data);
    } else {
      existingContacts = [];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Failed to read existing contacts:', error);
      return;
    }
  }

  const newContacts = Array.from({ length: 1 }, createFakeContact);
  const updatedContacts = [...existingContacts, ...newContacts];
  try {
    await writeContacts(updatedContacts);
    console.log('Added one fake contact.');
  } catch (error) {
    console.error('Failed to add contact:', error);
  }
};

addOneContact();
