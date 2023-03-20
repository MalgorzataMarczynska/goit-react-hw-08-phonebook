import css from './ContactItem.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArray } from 'redux/contacts/selectors';
import { removeContact } from 'redux/contacts/operations.js';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const array = useSelector(selectArray);

  return (
    <>
      {array.map(contact => (
        <li key={contact.id} className={css.listItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(removeContact(contact.id))}
          >
            <DeleteIcon boxSize={3} mr={1} verticalAlign />
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
