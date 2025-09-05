// import { useState } from 'react'
import Navbar from "./components/UI-Components/navbar";
import Hero from "./hero";
import NewArrival from "./new-arrival";
import TopSelling from "./top-selling";
import BrowseByStyle from "./browse-by-style";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrival />
      <TopSelling />
      <BrowseByStyle />
    </>
  );
}

export default App;
