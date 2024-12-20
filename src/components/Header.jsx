const Header = () => {
  return (
    <nav id="navScrollSpy" className="navbar sticky-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="/">Travel sTransport</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container d-flex-md justify-content-md-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/travel-wasp">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;