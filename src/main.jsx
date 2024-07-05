import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import './styles/tailwind.css';
const root = ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)