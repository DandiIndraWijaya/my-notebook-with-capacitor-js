import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import color from './styles/Colors';
import Paper from './components/Paper/Paper';
import './App.css';

function App() {
  return (
    <div className="MyNoteBook">
      <ThemeProvider theme={color}>
        <BrowserRouter>
          <Paper>
            <Routes />
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
