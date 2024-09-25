import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home"
import Contact from "./pages/Contact/contact"
import About from "./pages/About/about"
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Contact />} path="/Contact" exact />
        <Route element={<About />} path="/About" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
