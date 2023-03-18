import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.contacts;
export const selectFilters = state => state.filters;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectUsername = state =>
  state.contacts.contacts.map(contact => contact.name);
export const selectNumber = state =>
  state.contacts.contacts.map(contact => contact.number);
export const selectId = state =>
  state.contacts.contacts.map(contact => contact.id);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) =>
    contacts.filter(contact =>
      contact.name
        .toString()
        .toLowerCase()
        .includes(filters.toString().toLowerCase())
    )
);

export const selectArray = createSelector(
  [selectContacts, selectFilters, selectFilteredContacts],
  (contacts, filters, filteredContacts) => {
    if (filters === null || '' || undefined) {
      return contacts;
    }
    return filteredContacts;
  }
);
