import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
