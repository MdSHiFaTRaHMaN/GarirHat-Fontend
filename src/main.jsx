import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
