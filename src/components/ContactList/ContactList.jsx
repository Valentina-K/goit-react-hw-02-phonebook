import React from 'react';
import Contact from 'components/Contact/Contact';
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <>
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
          <button onClick={() => onClick(contact.id)}>Delete</button>
        </>
      ))}
    </ul>
  );
};
export default ContactList;
