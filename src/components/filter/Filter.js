import css from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = evt => dispatch(setFilter(evt.target.value));
  return (
    <div className={css.filter}>
      <label className={css.label}>
        <SearchIcon boxSize={4} mr={2} />
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilter}
      />
    </div>
  );
};
