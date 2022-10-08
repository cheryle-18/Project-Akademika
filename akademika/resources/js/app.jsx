import './bootstrap';
import '../css/app.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Index from './Index';

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('app')).render(
    <Index />
);

// function App(){
//     return(
//         <Home />
//     )
// }

// export default App;
