import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../fataures/books/AddBook';
import Navbar from '../layouts/Navbar';
import Home from '../Pages/home/Home';
import NotFound from '../Pages/NotFound/NotFound.jsx';
import './TotalRoutes.css';
import BookView from '../fataures/books/BookView';
import EditBook from '../fataures/books/EditBook';

const TotalRoutes = () => {
    return (
        <BrowserRouter>
         <Navbar/>
           <main>
           <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/showBook' element={<BookView/>}/>
                <Route path='/addBook' element={<AddBook/>}/>
                <Route path='/editBook' element={<EditBook/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
           </main>
        </BrowserRouter>
    );
};

export default TotalRoutes;