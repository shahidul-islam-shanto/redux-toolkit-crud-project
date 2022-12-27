import { createSlice } from "@reduxjs/toolkit"
import {v4 as uuidv4 } from 'uuid';

const initialBook = {
    book: [
        {id: uuidv4(), title: 'love Bangladesh', author: 'John Bekar'},
        {id: uuidv4(), title: 'love People', author: 'Pitar Parkar'}
    ]
}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialBook,
    reducers: {
        showBook: (state) => state,
        addBook: (state, action) => {
          state.book.push(action.payload);
        },
        updateBook: (state, action) => {
            const {id, title, author} = action.payload;
           const isBookExist = state.book.filter((book) => book.id === id)
           if(isBookExist){
            isBookExist[0].title = title;
            isBookExist[0].author = author;
           }
          },
        deleteBook: (state, action) => {
            const id = action.payload
            state.book =  state.book.filter(book => book.id !== id)
         },
    },
});

export const {showBook, addBook, deleteBook, updateBook} = bookSlice.actions;
export default bookSlice.reducer;
    