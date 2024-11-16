
const Gallery = () => {
  return (
    <section id="gallery" className="tour-gallery py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <div className="section-title text-center">
              <button type="button" className="btn primary-color btn-sm my-2" disabled>Gallery</button>
              <h3 className="mt-md-3">Best Tourist`s Shared Photos</h3>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="row mt-sm-2 mt-md-4">

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-gallery">
                <img src="/imgs/gallery/peru.jpg" alt="Peru" className="img-fluid"/>
                <h5 className="text-center">Machu Picchu, Peru</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-gallery">
                <img src="/imgs/gallery/canada.jpg" alt="Canada" className="img-fluid"/>
                <h5 className="text-center">Morained Lake, Canada</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-gallery">
                <img src="/imgs/gallery/thailand.jpg" alt="Thailand" className="img-fluid"/>
                <h5 className="text-center">Sea, Thailand</h5>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="single-gallery">
                <img src="/imgs/gallery/uae.jpg" alt="United Arab Emirates" className="img-fluid"/>
                <h5 className="text-center">United Arab Emirates</h5>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="single-gallery">
                <img src="/imgs/gallery/egypt.jpg" alt="Egypt" className="img-fluid"/>
                <h5 className="text-center">Egypt</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;