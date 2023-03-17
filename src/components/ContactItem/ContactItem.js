import css from './ContactItem.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArray } from 'redux/selectors';
import { removeContact } from 'redux/operations.js';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const array = useSelector(selectArray);

  return (
    <>
      {array.map(contact => (
        <li key={contact.id} className={css.listItem}>
          {contact.name}: {contact.phone}
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
