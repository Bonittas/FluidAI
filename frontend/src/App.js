import logo from './logo.svg'
import 'tailwindcss/tailwind.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from './pages/Portfolio';
function App() {
  return (
    <>

    <Routes>
        <Route>
        <Route path="/" element={<Portfolio />} />

            </Route>
            </Routes>
       
  
</>
  );
}

export default App;
