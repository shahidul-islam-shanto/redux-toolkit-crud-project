import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './AddBook.css';
import { addBook } from './BookSlice';
import {v4 as uuidv4 } from 'uuid';


const AddBook = () => {
    const [title, setTitle] =useState("")
    const [author, setAuthor] =useState("")
    
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    
 
    const handleSubmit = (e) => {
      e.preventDefault()
      const book = {id: uuidv4(), title, author}
      dispatch(addBook(book))
      navigate("/showBook", {replace: true})
    }
    return (
        <div>
            <h1>Add Book App</h1>
            <form onSubmit={handleSubmit}>
               <div className="form-area">
                <label htmlFor="title">Title: </label>
                    <input 
                    type="text"
                    id='title' 
                    name='title' 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder='Title Name' 
                    required />
               </div>
               <div className="form-area">
                <label htmlFor="author">Author: </label>
                    <input 
                    type="text"
                    id='author' 
                    name='author' 
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                    placeholder='Author Name' 
                    required />
               </div>
               <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;