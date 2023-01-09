import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { getFilterContacts } from './Utils/getFilterContacts';

const nanoid = customAlphabet('1234567890id-', 5);

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    if (this.state.contacts.some(contact => contact.name === name)) {
      Notify.info(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => contacts.push(newContact));
    }
  };

  deleteContact = ({ id }) => {
    this.setState(({ contacts }) => getFilterContacts(contacts, id));
  };

  findByName = ({ name }) =>
    this.state.contacts.filter(contact => contact.name.includes(name));

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.findByName} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
