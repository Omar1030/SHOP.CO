import Landing from "../pages/landing/Landing";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Error from "../pages/Error";

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
