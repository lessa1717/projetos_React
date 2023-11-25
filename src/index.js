import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import App from './App';
import Details from '../src/details/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  </BrowserRouter>
);
