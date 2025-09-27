import Navbar from "../../layout/navbar.jsx";
import Hero from "./hero.jsx";
import NewArrival from "./new-arrival.jsx";
import TopSelling from "./top-selling.jsx";
import BrowseByStyle from "./browse-by-style.jsx";
import Feedback from "./feedback.jsx";
import ScrollUpBtn from "../../layout/scroll-up-btn.jsx";
import Footer from "../../layout/footer.jsx";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrival />
      <TopSelling />
      <BrowseByStyle />
      <Feedback />
      <ScrollUpBtn />
      <Footer />
    </>
  );
};

export default Landing;
