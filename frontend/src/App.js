import 'tailwindcss/tailwind.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/HomePage1';
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
