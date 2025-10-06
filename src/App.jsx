import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./routes/routes.jsx";

import { fetchProducts } from "./features/products-slice.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
