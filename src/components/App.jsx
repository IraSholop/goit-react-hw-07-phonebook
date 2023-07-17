import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(fetchContacts())
  },[dispatch])
  const contacts = useSelector(state => state.contacts.array);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
