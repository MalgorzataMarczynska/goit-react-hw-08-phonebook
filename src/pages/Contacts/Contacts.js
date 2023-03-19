import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FallingLines } from 'react-loader-spinner';
import { Filter } from 'components/filter/Filter.js';
import { ContactList } from 'components/ContactList/ContactList.js';
import { ContactItem } from 'components/ContactItem/ContactItem.js';
import { ContactForm } from 'components/ContactForm/ContactForm.js';
import { fetchContacts } from 'redux/contacts/operations.js';
import { selectIsLoading, selectError } from 'redux/contacts/selectors.js';
import css from './Contacts.module.css';
const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <section>
        <h2 className={css.title}>Add contact to your phonebook</h2>
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
        <h2 className={css.title}>Your contacts</h2>
        <Filter />
        <ContactList>
          <ContactItem />
        </ContactList>
      </section>
    </div>
  );
};
export default Contacts;
