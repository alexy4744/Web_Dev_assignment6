import { configureStore, createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    author: null,
    books: [],
    randomBooks: [],
  },
  reducers: {
    reset(state) {
      state.author = null;
      state.books = [];
      state.randomBooks = [];
    },
    setAuthor(state, action) {
      state.author = action.payload;
    },
    setBooks(state, action) {
      state.books = action.payload;
    },
    setRandomBooks(state, action) {
      // Randomize the books and only take the first 5
      state.randomBooks = action.payload.sort(() => 0.5 - Math.random()).slice(0, 5);
    },
  },
});

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export const { reset, setAuthor, setBooks, setRandomBooks } = globalSlice.actions;
