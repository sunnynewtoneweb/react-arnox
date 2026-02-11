import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '@splidejs/react-splide/css';
import './animation.css'
import '../src/components/header/Header.css'
import '../src/components/footer/Footer.css'
import App from './App.jsx'
import './index.css'
import './responsive.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />    
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
