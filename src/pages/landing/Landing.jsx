import Hero from "./hero.jsx";
import NewArrival from "./new-arrival.jsx";
import TopSelling from "./top-selling.jsx";
import BrowseByStyle from "./browse-by-style.jsx";
import Feedback from "./feedback.jsx";
import ScrollUpBtn from "../../layout/scroll-up-btn.jsx";

const Landing = () => {
  return (
    <>
      <Hero />
      <NewArrival />
      <TopSelling />
      <BrowseByStyle />
      <Feedback />
      <ScrollUpBtn />
    </>
  );
};

export default Landing;
