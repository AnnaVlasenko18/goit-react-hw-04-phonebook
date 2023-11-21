import { GlobalStyle } from './GlogalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Wrapper, Container, Title, TitleContact } from './Layout';

const storageContact = 'add-contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', firstName: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', firstName: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', firstName: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', firstName: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    const contactInput = { id: nanoid(), ...values };
    const existingContact = this.state.contacts.find(
      contact => contact.firstName === contactInput.firstName
    );

    if (existingContact) {
      toast.error(`${contactInput.firstName}  Is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactInput],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const saveContact = window.localStorage.getItem(storageContact);
    if (saveContact !== null) {
      this.setState({
        contacts: JSON.parse(saveContact),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageContact,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  changeFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Wrapper>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onAddContact={this.addContact} />
          <TitleContact>Contacts</TitleContact>
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
          <Toaster />
          <GlobalStyle />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
