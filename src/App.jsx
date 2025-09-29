import { Routes, Route } from "react-router";
import routes from "./routes/routes.jsx";
import axios from "axios";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setMenShirts, setMenShoes, setMenWatches } from "./features/men-products-slice.jsx";
import { setWomenDresses, setWomenShoes, setWomenWatches, setWomenBags, setWomenJewellery } from "./features/women-products-slice.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category/mens-shirts").then((data) => {
      dispatch(setMenShirts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/mens-shoes").then((data) => {
      dispatch(setMenShoes(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/mens-watches").then((data) => {
      dispatch(setMenWatches(data.data.products));
    });

    axios.get("https://dummyjson.com/products/category/womens-dresses").then((data) => {
      dispatch(setWomenDresses(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-shoes").then((data) => {
      dispatch(setWomenShoes(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-watches").then((data) => {
      dispatch(setWomenWatches(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-bags").then((data) => {
      dispatch(setWomenBags(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-jewellery").then((data) => {
      dispatch(setWomenJewellery(data.data.products));
    });
  }, [dispatch]);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
