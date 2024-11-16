const CarouselComponent = () => {
  return (
    <div id="carouselTravelWasp" className="carousel slide container-fluid" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/imgs/carousel/hike.jpg" className="d-block w-100" alt="walk with nature"/>
          <div className="carousel-caption">
            <h1 className="fw-bolder">To walk with Nature</h1>
            <p className="fw-medium">The mountains are calling and I must go.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/imgs/carousel/island-beach.jpeg" className="d-block w-100" alt="kayaking"/>
          <div className="carousel-caption ">
            <h1 className="fw-bolder">Live life in Kayaks</h1>
            <p className="fw-medium">Never let your fears paddle solo</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/imgs/carousel/caving.jpg" className="d-block w-100" alt="man cave"/>
        <div className="carousel-caption">
          <h1 className="fw-bolder">Man Cave</h1>
          <p className="fw-medium">
            You can always get out; there`s never a dead end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;