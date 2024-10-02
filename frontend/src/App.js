import logo from './logo.svg'
import 'tailwindcss/tailwind.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/HomePage4';
function App() {
  return (
    <>

    <Routes>
        <Route>
        <Route path="/" element={<LandingPage />} />

            </Route>
            </Routes>
       
  
</>
  );
}

export default App;
