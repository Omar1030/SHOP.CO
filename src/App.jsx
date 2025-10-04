import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./routes/routes.jsx";
import { setProducts } from "./features/products-slice.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category/mens-shirts").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/mens-shoes").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/mens-watches").then((data) => {
      dispatch(setProducts(data.data.products));
    });

    axios.get("https://dummyjson.com/products/category/womens-dresses").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-shoes").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-watches").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-bags").then((data) => {
      dispatch(setProducts(data.data.products));
    });
    axios.get("https://dummyjson.com/products/category/womens-jewellery").then((data) => {
      dispatch(setProducts(data.data.products));
    });
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
