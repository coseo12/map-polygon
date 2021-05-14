import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles } from './styles';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
