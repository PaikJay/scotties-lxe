import React from 'react';
import ReactDOMClient, {createRoot} from 'react-dom/client' ;
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

