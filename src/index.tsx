import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Inventory from './routes/inventory';
import Store from './routes/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={
            <Navigate to="/inventory" />
          }/>
          <Route path="inventory" element={<Inventory />} />
          <Route path="store" element={<Store />} />
          <Route
            path="*"
            element={
              <main>
                <p><strong>404</strong> - There's nothing here!</p>
                <Link to="/">Go to homepage</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
