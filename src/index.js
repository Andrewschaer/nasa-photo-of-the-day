import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { ThemeProvider } from 'styled-components'
import App from './components/App';
import themeObj from './theme';
import './styles/index.css';


ReactDOM.render(
    <App />, 
    
    document.getElementById("root")
);
