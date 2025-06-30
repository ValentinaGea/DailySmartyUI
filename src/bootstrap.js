import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Home from './components/home';
import Results from './components/results';

// Creamos el store con middleware
const store = configureStore({
  reducer: reducers,
});

function main() {
  const rootElement = document.querySelector('.app-wrapper');
  const root = ReactDOM.createRoot(document.querySelector('.app-wrapper'));
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

document.addEventListener('DOMContentLoaded', main);
