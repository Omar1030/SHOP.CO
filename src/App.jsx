import Navbar from "./components/UI-Components/navbar";
import Hero from "./hero";
import NewArrival from "./new-arrival";
import TopSelling from "./top-selling";
import BrowseByStyle from "./browse-by-style";
import Feedback from "./feedback.jsx";
import Footer from "./components/UI-Components/footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrival />
      <TopSelling />
      <BrowseByStyle />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
