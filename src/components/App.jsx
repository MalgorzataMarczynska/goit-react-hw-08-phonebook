import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FallingLines } from 'react-loader-spinner';
import { Filter } from './filter/Filter.js';
import { ContactList } from './ContactList/ContactList.js';
import { ContactItem } from './ContactItem/ContactItem.js';
import { ContactForm } from './ContactForm/ContactForm.js';
import { fetchContacts } from 'redux/operations.js';
import { selectIsLoading, selectError } from 'redux/selectors.js';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="main-title">Phonebook</h1>
      <section>
        <ContactForm />
        {isLoading && !error && (
          <FallingLines
            color="#3f51b5"
            width="50"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        )}
      </section>
      <section>
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList>
          <ContactItem />
        </ContactList>
      </section>
    </div>
  );
};
