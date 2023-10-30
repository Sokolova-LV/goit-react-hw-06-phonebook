import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    contacts: [
        //{ id: 1, name: 'qwe', number: '123' },
        //{ id: 2, name: 'asd', number: '456' },
        //{ id: 3, name: 'zxc', number: '789' },
    ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(),
                        name: contact.name,
                        number: contact.number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            );
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;