import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
        data-aos-delay="1500"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>
                I'm <span>Jenny Wilson</span> a Professional Photographer from
                New York City
              </h2>
              <p>
                Blanditiis praesentium aliquam illum tempore incidunt debitis
                dolorem magni est deserunt sed qui libero. Qui voluptas amet.
              </p>
              <a href="contact.html" className="btn-get-started">
                Available for hire
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Main */}
      <main id="main" data-aos="fade" data-aos-delay="1500">
        {/* Gallery Section */}
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={process.env.PUBLIC_URL + "./assets/images/gallery-1.jpg"}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={process.env.PUBLIC_URL + "/images/gallery-1.jpg"}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Gallery Section */}
      </main>
      {/* End #main */}






      
    </div>
  );
}

export default Home;
