import Navbar from "../Components/UI/navbar.jsx";
import Hero from "../Components/Landing/hero";
import NewArrival from "../Components/Landing/new-arrival";
import TopSelling from "../Components/Landing/top-selling";
import BrowseByStyle from "../Components/Landing/browse-by-style";
import Feedback from "../Components/Landing/feedback";
import ScrollUpBtn from "../Components/UI/scroll-up-btn";
import Footer from "../Components/UI/footer.jsx";

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
