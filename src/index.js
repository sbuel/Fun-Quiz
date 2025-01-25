import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional if you want styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This links to the <div id="root"> in public/index.html
);
