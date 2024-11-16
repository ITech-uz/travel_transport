const Packages = () => {
  return (
    <section className="package py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <div className="section-title text-center">
              <button type="button" className="btn primary-color btn-sm my-2" disabled>Popular Packages</button>
              <h3 className="mt-md-3">The Best of Our Packages</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="single-package" data-aos="fade-right">
              <div className="pack-image">
                <img src="/imgs/popular-packages/1.jpg" alt="French Sea Beach" className="img-fluid"/>
              </div>
              <div className="tour-text py-2 px-3">
                <div className="tour-rating mb-2">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                </div>
                <div className="row">
                  <div className="col-8">
                    <h5 className="fw-bolder">French Sea Beach</h5>
                  </div>
                  <div className="col-4">
                    <p className="pack-price">From $159</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="single-package" data-aos="fade-up">
              <div className="pack-image">
                <img src="/imgs/popular-packages/2.jpg" alt="Beautiful Island Resort" className="img-fluid"/>
              </div>
              <div className="tour-text p-2">
                <div className="tour-rating mb-2">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                </div>
                <div className="row">
                  <div className="col-8">
                    <h5 className="fw-bolder">Beautiful Island Resort</h5>
                  </div>
                  <div className="col-4">
                    <p className="pack-price">From $269</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="single-package" data-aos="fade-left">
              <div className="pack-image">
                <img src="/imgs/popular-packages/3.jpg" alt="Maldives Sea Beach" className="img-fluid"/>
              </div>
              <div className="tour-text p-2">
                <div className="tour-rating mb-2">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                </div>
                <div className="row">
                  <div className="col-8">
                    <h5 className="fw-bolder">Maldives Sea Beach</h5>
                  </div>
                  <div className="col-4">
                    <p className="pack-price">From $350</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;