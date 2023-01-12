import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getFilter, getItems } from 'redux/selectors';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch(); 

  const visibleContacts = () => { 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };
  let visible = filter === '' ? contacts : visibleContacts();
    return (
    <List>
      {visible.map(({ id = nanoid(), name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContacts(id))}>Delete
          </button>
        </li>
      ))}
        </List>
  );
};
// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }))
// }

export default ContactsList;