import React, { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create a context with a default value
export const Context = createContext({isAuthenticated: false});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);