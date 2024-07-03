import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import Pais from './ficha-pais.tsx';
import NotFound from './not-found.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pais/:nombre" element={<Pais />} />
      <Route path="*" element={<NotFound />} /> {/* Ruta para NotFound */}
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);