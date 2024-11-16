
const ChooseUs = () => {
  return (
    <section className="choose-us features py-5">
      <div className="container travel-wasp" data-aos="fade-up">
        <div className="row justify-content-md-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <i className="fa-solid fa-plane-departure"></i>
                <h5 className="mt-2">Travel Arrangements</h5>
                <p className="text-lg-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                  alias rem at a quia corrupti!
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <i className="fa-solid fa-chart-line"></i>
                <h5 className=" mt-2">Activies</h5>
                <p className="text-lg-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                  alias rem at a quia corrupti!
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <i className="fa-solid fa-map-location-dot"></i>
                <h5 className="mt-2">Location Manager</h5>
                <p className="text-lg-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                  alias rem at a quia corrupti!
                </p>
              </div>
              <div className=" col-xl-6 col-lg-6 col-md-6">
                <i className=" fa-solid fa-user-shield"></i>
                <h5 className=" mt-2">Private Guide</h5>
                <p className=" text-lg-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                  alias rem at a quia corrupti!
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="row">
              <div className="col-md-6 ps-md-5 mt-sm-3">
                <img src="/imgs/features/feature-1.jpg" className="img-fluid" alt=" beach image"/>
              </div>
              <div className=" col-md-6 mt-md-5 ps-md-5 mt-3">
                <img src="/imgs/features/feature-2.jpg" className="img-fluid" alt="beach image-maldives"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;