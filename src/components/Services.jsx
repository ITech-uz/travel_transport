
const Services = () => {
  return (
    <section data-bs-spy="scroll" data-bs-target="#navScrollSpy" className="services py-5" id="service">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <button type="button" className="btn primary-color btn-sm my-2" disabled>Services</button>
              <h3 className="mt-md-3">What We Offer For You</h3>
            </div>
          </div>
        </div>
        <div className="row text-left mt-sm-2 mt-md-4">
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-bed"></i>
              </div>
              <div className="service-text">
                <h4>Delux Room</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-burger"></i>
              </div>
              <div className="service-text">
                <h4>Delicious Food</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-taxi"></i>
              </div>
              <div className="service-text">
                <h4>Airport Taxi</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-wifi"></i>
              </div>
              <div className="service-text">
                <h4>Free Wifi</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-briefcase-medical"></i>
              </div>
              <div className="service-text">
                <h4>Free Medication</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12 services-card p-sm-2 p-md-4">
            <div className="service p-4 my-2">
              <div className="icon my-3">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="service-text">
                <h4>Tour Guide</h4>
                <p className="mt-md-2 mt-lg-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
                  rerum suscipit ipsa, voluptas blanditiis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;