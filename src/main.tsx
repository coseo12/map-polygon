import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles } from './styles';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <Home />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
