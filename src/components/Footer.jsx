const Footer = () => {
  return (
    <>
      <section className="footer py-5" id="contact">
        <div className="container footer-top">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="footer-column pb-xl-3 mb-4">
                <h4 className="col-title pb-xl-3 pb-sm-2">Contact</h4>
                <div className="footer-cont-info">
                  <p>
                    <i className="fa-solid fa-phone me-2"></i>
                    <span>+639183499232</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-at me-2"></i>
                    <span>travelwasp@example.com</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-location-arrow me-2"></i>
                    <span>Ayala Avenue, Makati City, PH</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="footer-column pb-xl-3 mb-4">
                <h4 className="col-title pb-xl-3 pb-sm-2">Quick Links</h4>
                <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Travel Blogs & Tips</a></li>
                  <li><a href="#">Tour Guide</a></li>
                  <li><a href="#">Be Our Partner</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="footer-column pb-xl-3 mb-4">
                <h4 className="col-title pb-xl-3 pb-sm-2">Support</h4>
                <ul>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Privacy & Policy</a></li>
                  <li><a href="#">Forum</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="footer-column pb-xl-3 mb-4">
                <h4 className="col-title pb-xl-3 pb-sm-2">Newsletter</h4>
                <p>By subscribing to our mailing list you will always be updated</p>
                <div className="subscribe-form">
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email"/>
                    <button type="button" className="btn sub-btn primary-bg btn-md mt-3">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-btm">
          <div className="row text-center">
            <small>Copyright @ Travel Transport all right reserved.</small>
          </div>
        </div>
      </section>
      <div id="topControl" className="top-control">
        <i className="fa-brands fa-space-awesome"></i>
      </div>
    </>
  );
};

export default Footer;