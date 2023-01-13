import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistContactsConfig = { key: 'root', version: 1, storage };

export const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);
