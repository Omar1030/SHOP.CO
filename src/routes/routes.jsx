import Landing from "../Pages/Landing";
import ProductDetail from "../Pages/ProductDetail";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
