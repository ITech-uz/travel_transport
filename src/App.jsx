import Header from "./components/Header.jsx";
import CarouselComponent from "./components/Carousel.jsx";
import ChooseUs from "./components/ChooseUs.jsx";
import TopDeals from "./components/TopDeals.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Packages from "./components/Packages.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header/>
      <CarouselComponent/>
      <ChooseUs/>
      <TopDeals/>
      <Services/>
      <Gallery/>
      <Packages/>
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default App;