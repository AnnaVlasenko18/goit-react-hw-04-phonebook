import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    backgroundInput: '#e8e3e5',
    background: '#bfb9bd',
    backgroundBtn: '#8b8589',
    backgroundBorder: '#5d555b',
    color: '#5d555b',
    colorBtn: '#f2f3f4',
    accentBtn: '#173620',
    accentColorBtn: 'white',
  },

  fontSize: {
    fs12: '12px',
    fs20: '20px',
    fs24: '24px',
    fs28: '28px',
  },

  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },

  font: {
    fontSize: '18px',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
