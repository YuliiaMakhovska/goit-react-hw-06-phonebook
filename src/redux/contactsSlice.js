import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts(state, action) {
      const id = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(id, 1);
      //   state.contacts = state.contacts.filter(
      //     item => item.id !== action.payload
      //   );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContacts, deleteContacts, setFilter } = contactsSlice.actions;

const persistContactsConfig = { key: 'root', version: 1, storage };

export const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);
//--------------------------------------------------------------/
// const persistFilterConfig = { key: 'contacts', storage };

// export const persistedFilterReducer = persistReducer(
//   persistFilterConfig,
//   filterSlice.reducer
// );

//------Selectors--------------------------------------------------------/
