import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
function App() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
