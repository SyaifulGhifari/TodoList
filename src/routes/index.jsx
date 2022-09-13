import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from '../pages/Home';
import Myfavorite from '../pages/Myfavorite';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='myfavorite' element={<Myfavorite />} />
      </Routes>
    </BrowserRouter>
  );
}
