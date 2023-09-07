import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
/* import Products from './pages/products/Products'; */
import Home from './pages/home/Home';
import TvShow from './components/tvshow/tvshow';
import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes >

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<TvShow />} />
      </Routes>
      
    </>
  );
}

export default App;
