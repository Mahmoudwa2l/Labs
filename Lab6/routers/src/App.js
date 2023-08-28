import './App.css'
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './sections/home/Home';
import ContactUs from './sections/contact/ContactUs';
import Gallery from './sections/gallery/Gallery';
import About from './sections/about/About';
import Services from './sections/services/Services';
import NotFound from './sections/notFound/NotFound';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    


    </>
  );
}

export default App;
