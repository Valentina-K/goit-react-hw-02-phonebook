import React, { Component } from 'react';
import Contact from 'components/Contact/Contact';

export default class ContactList extends Component {
  state = {
    contacts: this.props.contacts,
  };

  deleteContact = () =>
    this.state.contacts.filter(
      (contact, index, arr) => arr.indexOf(contact) !== index
    );
  render() {
    return (
      <ul>
        {this.props.filter === '' &&
          this.state.contacts.map(contact => (
            <>
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
              <button onClick={this.deleteContact}>Delete</button>
            </>
          ))}
      </ul>
    );
  }
}
