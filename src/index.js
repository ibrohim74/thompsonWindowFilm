import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {LanguageProvider} from "./processes/lang/LangContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>

);
