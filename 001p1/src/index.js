import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
var i=0;
for(i=0; i<3; i++)
{
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}
