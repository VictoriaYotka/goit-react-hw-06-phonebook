import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

      const handleDeleteButton = (id) => {
        dispatch(removeContact(id))
    }

    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.list}>
            {filteredContacts.map(({id, name, number}) => <li key={id} className={css.item}>{name}: {number}
            <button onClick={() => handleDeleteButton(id)} className={css.button}>Delete</button>
            </li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array, 
    filter: PropTypes.string, 
    handleDeleteButton: PropTypes.func
}