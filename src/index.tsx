import React from 'react';
import ReactDOM from 'react-dom/client';
import Charts from './pages/Charts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Charts />
  </React.StrictMode>
);

