import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeBook from './pages/homeBook';
import ShowBook from './pages/showBook';
import createBook from './pages/createBook';
import deleteBook from './pages/deleteBook';
import editBook from './pages/editBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeBook />}/>
      <Route path='/book/create' element={<createBook />}/>
      <Route path='/book/details/:id' element={<ShowBook />}/>
      <Route path='/book/edit/:id' element={<editBook />}/>
      <Route path='/book/delete/:id' element={<deleteBook />}/>
    </Routes>
  )
}

export default App
