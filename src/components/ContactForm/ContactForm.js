import css from './ContactForm.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { PhoneIcon, PlusSquareIcon } from '@chakra-ui/icons';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target;
    const username = target.username.value;
    const number = target.number.value;
    const data = { name: username, number: number };
    dispatch(addContact(data));
    target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        type="text"
        name="username"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label}>
        <PhoneIcon boxSize={4} mr={1} /> Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        <PlusSquareIcon boxSize={4} mr={1} /> Add contact
      </button>
    </form>
  );
};
