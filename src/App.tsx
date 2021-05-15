import React, { useState } from 'react';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import LocationContextProvider from './contexts/LocationContext';

const App = () => {
  const [darkMode, _] = useState<boolean>(false);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <LocationContextProvider>
          <Home />
        </LocationContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
