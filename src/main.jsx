import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '@splidejs/react-splide/css';
import './animation.css'
import './App.css'
import 'react-phone-number-input/style.css'
import '../src/components/header/Header.css'
import '../src/components/footer/Footer.css'
import './index.css'
import './responsive.css'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleReCaptchaProvider>
);
