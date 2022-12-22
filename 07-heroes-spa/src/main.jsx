import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles.css'
import { router } from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
