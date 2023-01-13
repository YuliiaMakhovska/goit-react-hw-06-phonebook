import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getFilter, getItems } from 'redux/selectors';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

    const filteredContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );


    return (
    <List>
      {filteredContacts.map(({ id = nanoid(), name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContacts(id))}>Delete
          </button>
        </li>
      ))}
        </List>
  );
};
export default ContactsList;