import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top mb-5">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <i className="bi bi-camera"></i>
          <h1>PhotoFolio</h1>
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <li className="dropdown"><NavLink to="/gallery" >Gallery</NavLink>
              <ul>
                <NavLink>Natural</NavLink>
                <li><a href="gallery.html">People</a></li>
                <li><a href="gallery.html">Architecture</a></li>
                <li><a href="gallery.html">Animals</a></li>
                <li><a href="gallery.html">Sports</a></li>
                <li><a href="gallery.html">Travel</a></li>
                <li className="dropdown"><NavLink>Sub-menu<i className="bi bi-chevron-down dropdown-indicator"></i></NavLink>
                  <ul>
                    <NavLink>About</NavLink>
                    <NavLink>About</NavLink>
                  </ul>
                </li>
              </ul>
            </li>
            <NavLink to="/services" >Services</NavLink>
            <NavLink to="/contactUs" >Contact</NavLink>
          </ul>
        </nav>
        
        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        
      </div>
    </header>
  );
}

export default Navbar;
