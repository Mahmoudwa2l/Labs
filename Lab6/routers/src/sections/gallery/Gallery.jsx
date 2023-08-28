import React from 'react';

function Gallery() {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Nature (16 images)</h2>
              <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              <a className="cta-btn" href="contact.html">Available for hire</a>
            </div>
          </div>
        </div>
      </div>

      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="row gy-4 justify-content-center">

            {/* Gallery Item */}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="gallery-item h-100">
                <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                <div className="gallery-links d-flex align-items-center justify-content-center">
                  <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
                  <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
            {/* End Gallery Item */}

            {/* Repeat the pattern for each Gallery Item */}
            {/* ... */}
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
