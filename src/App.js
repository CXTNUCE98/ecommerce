import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import './index.css'
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from "./components/Navbar";
import Announce from "./components/Announce";

function App() {
  return (
    <div className="App">
      <Announce />
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>  
    </div>
  );
}

export default App;


