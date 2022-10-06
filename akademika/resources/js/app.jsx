import './bootstrap';
import '../css/app.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('app')).render(
    <Home />
);

// function App(){
//     return(
//         <Home />
//     )
// }

// export default App;
