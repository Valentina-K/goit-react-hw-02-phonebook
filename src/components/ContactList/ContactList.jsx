import React from 'react';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => (
        <div>
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
          <button onClick={() => onClick(contact.id)}>Delete</button>
        </div>
      ))}
    </List>
  );
};
export default ContactList;
