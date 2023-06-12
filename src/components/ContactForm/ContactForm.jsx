import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';


export function ContactForm() {

  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
  
      const newName = form.elements.name.value;
      const newNumber = form.elements.number.value; 

    if(contacts.find(({name}) => name === newName)) {
      alert (`${newName} is already in contacts`)

    } else {dispatch(addContact({name: newName,
      number: newNumber}))}

    form.reset()
  }

    return (
        <>

        <form onSubmit={handleSubmit} className={css.form}>
    <label htmlFor="name" className={css.label}>Name</label>
<input
className={css.input}
  type="text"
  name="name"
  id="name"
  pattern="[a-zA-Z]*"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

<label htmlFor="number" className={css.label}>Number</label>
<input
className={css.input}
  type="tel"
  name="number"
  id="number"
  pattern="[0-9]+"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

<button type="submit" className={css.button}>Add contact</button>
</form>
</>
    )
}
