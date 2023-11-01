import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact (state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact (state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
        )}, 
    },
});

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistContactsReducer = persistReducer(persistConfig, contactsReducer);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;