import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Skills from './pages/Skills';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';

import About from './pages/About';
export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/nav" element={<Nav />}/>
        <Route index element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
     
   
    </Routes>
  </BrowserRouter>
  );}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
