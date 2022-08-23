import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00AB44'
    }
  },
  typography: {
    fontFamily: 'Nunito, sans-serif'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider
    theme={theme}
  >
    <CssBaseline />
    <App />
  </ThemeProvider>
);
