import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { store } from 'config/store';
import ReactDOM from 'react-dom/client';
import i18n from 'utils/i18n';

import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#303030',
      paper: '#424242'
    },
    mode: 'dark',
    primary: {
      main: '#F39200',
    },
    secondary: {
      main: '#F39200',
    },
  }
});


root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </I18nextProvider>
  </Provider>
);
