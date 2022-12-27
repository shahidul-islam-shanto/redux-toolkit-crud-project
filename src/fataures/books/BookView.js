import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';
import './BookView.css';

const BookView = () => {
    const book = useSelector((state) => state.bookRenderer.book)
    
    const dispatch = useDispatch()
    const handleDelete = (id) => {
       dispatch(deleteBook(id))
    }
    return (
        <div>
            <h2>List of Book</h2>
            <table>
              <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                {book && book.map((book) => {
                   const {id, title, author} = book
                   return <tr key={id}>
                     <td>{id}</td>
                     <td>{title}</td>
                     <td>{author}</td>
                     <td>
                        <Link to={"/editBook"} state={{id, title, author}}><button>Edit</button></Link>                   
                        <button onClick={()=>{handleDelete(id)}}>Delete</button>
                     </td>
                   </tr>
                })}
               </tbody>
                </table>
           
        </div>
    );
};

export default BookView;