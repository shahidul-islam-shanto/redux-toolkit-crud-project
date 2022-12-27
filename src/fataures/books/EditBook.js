import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { updateBook } from './BookSlice';


const ShowBook = () => {
    const location = useLocation()
    
    const [id, setId] = useState(location.state.id);
    const [title, setTile] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
   

    const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id, title, author}))
        navigate('/showBook', {replace: true})
     }
    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-area">
                <label htmlFor="title">Title: </label>
                    <input 
                    type="text"
                    id='title' 
                    name='title' 
                    value={title}
                    onChange={(e)=> setTile(e.target.value)}
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
               <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default ShowBook;