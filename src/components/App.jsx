import { GlobalStyle } from './GlogalStyle';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Wrapper, Container, Title, TitleContact } from './Layout';

const getInitialContacts = () => {
  const saveContact = window.localStorage.getItem('storageContact');
  if (saveContact !== null) {
    return JSON.parse(saveContact);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('storageContact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const existingContact = contacts.some(
      ({ firstName }) => newContact.firstName === firstName
    );

    if (existingContact) {
      toast.error(` Is already in contacts!`);
      return;
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const changeFilter = value => setFilter(value.trim().toLocaleLowerCase());

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={addContact} />
        <TitleContact>Contacts</TitleContact>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
        <Toaster />
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};
