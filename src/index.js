import React, {Suspense, lazy, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {LanguageProvider} from "./processes/lang/LangContext";

// Lazy load the App component
const App = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('./App')), 2000);
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>

            <App/>

    </LanguageProvider>
);
