import React from 'react';
import { ChartDemo } from 'pages/Charts';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChartDemo />
  </React.StrictMode>
);

