
const TopDeals = () => {
  return (
    <section className="top-deals py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center" data-aos="fade-up">
              <button type="button" className="btn primary-color btn-sm my-2" disabled>Destinations</button>
              <h3 className="mt-md-3">Travel Most Popular Places</h3>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-12 col-xl-4 col-lg-6">
            <figure className="figure single-deal" data-aos="fade-right">
              <img src="/imgs/destinations/1.jpg" className="figure-img img-fluid" alt="Kayaking, Siargao"/>
              <figcaption className="figure-caption p-3">
							<span className="tr-price p-2">
								$ 200/Night
							</span>
                <small><i className="fa-regular fa-clock my-2"></i> 10 Days Trip</small>
                <h5>Princetown, Austria</h5>
                <div className="tour-rating mt-3">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <span className="rating_count">(140)</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-sm-12 col-xl-4 col-lg-6">
            <figure className="figure single-deal" data-aos="fade-up">
              <img src="/imgs/destinations/2.jpg" className="figure-img img-fluid"
                   alt="Vigan City, Philippines"/>
              <figcaption className="figure-caption p-3">
							<span className="tr-price p-2">
								$ 150/Night
							</span>
                <small><i className="fa-regular fa-clock my-2"></i> 7 Days Trip</small>
                <h5>Surfers Paradise, Australia</h5>
                <div className="tour-rating mt-3">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <span className="rating_count">(189)</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-sm-12 col-xl-4 col-lg-6">
            <figure className="figure single-deal" data-aos="fade-left">
              <img src="/imgs/destinations/3.jpg" className="figure-img img-fluid"
                   alt="Oslob Whale Shark"/>
              <figcaption className="figure-caption p-3">
							<span className="tr-price p-2">
								$ 350/Night
							</span>
                <small><i className="fa-regular fa-clock my-2"></i> 10 Days Trip</small>
                <h5>Sydney, Australia</h5>
                <div className="tour-rating mt-3">
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <i className="fas fa-star primary-color" aria-hidden="true"></i>
                  <span className="rating_count">(250)</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;