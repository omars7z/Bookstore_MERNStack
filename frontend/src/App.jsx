import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeBook from './pages/homeBook';
import ShowBook from './pages/showBook';
import CreateBook from './pages/createBook';
import DeleteBook from './pages/deleteBook';
import EditBook from './pages/editBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeBook />}/>
      <Route path='/book/create' element={<CreateBook />}/>
      <Route path='/book/details/:id' element={<ShowBook />}/>
      <Route path='/book/edit/:id' element={<EditBook />}/>
      <Route path='/book/delete/:id' element={<DeleteBook />}/>
    </Routes>
  )
}

export default App
