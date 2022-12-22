import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles.css'
import { AppRouter } from './router/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HeroesApp/>
    </React.StrictMode>,
)
