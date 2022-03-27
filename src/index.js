import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@mui/material';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#10141c" 
        },
        secondary: {
            main: "#ffd70d"
        }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    },
    cardcontent: {
      paddingLeft: 0,
      paddingRight:0,
      paddingTop:0,
      paddingBottom: 0,
    },
    
    
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline/>
        <ToastContainer autoClose={2000} hideProgressBar="true" position="top-center" />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);