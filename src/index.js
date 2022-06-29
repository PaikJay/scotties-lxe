import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client' ;
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";


const root = createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
<App />
    </HashRouter>
);
