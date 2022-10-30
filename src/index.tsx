/* eslint-disable linebreak-style */
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SearchAdress } from './pages';
import { News } from './pages/News';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/adress" element={<SearchAdress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
