import { configureStore } from "@reduxjs/toolkit";
import  bookRenderer from "../fataures/books/BookSlice";


const store = configureStore({
    reducer:{
        bookRenderer: bookRenderer
    }
})

export default store;