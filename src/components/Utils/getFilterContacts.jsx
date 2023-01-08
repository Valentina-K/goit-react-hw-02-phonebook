export const getFilterContacts = ({ contacts, filter }) =>
  contacts.filter(contact => contact.id !== filter);
