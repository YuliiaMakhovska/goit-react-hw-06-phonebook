
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
 
export const App = () => {
      return (<Container>
      <h1>Phonebook</h1>
      <ContactForm  /> 
      <h2>Contacts</h2>
      <Filter />
      <ContactsList
      />
    </Container>
    )
}
