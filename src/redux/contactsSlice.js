import { createSlice } from "@reduxjs/toolkit";

const slise = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slise.actions;

export const selectContacts = (state) => state.contacts.items;

export default slise.reducer;
