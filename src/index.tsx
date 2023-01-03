/** @format */

import ReactDOM from 'react-dom/client';
import App from './App';
import Master from './layout/Master';
import './assets/css/tailwind.css';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

const rootApp = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootApp);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Master>
        <App />
      </Master>
    </BrowserRouter>
  </HelmetProvider>
);
