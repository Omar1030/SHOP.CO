import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("../pages/landing/Landing"));
const ProductDetail = lazy(() => import("../pages/product-details/ProductDetail"));
const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/Cart"));
const Error = lazy(() => import("../pages/Error"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<Navbar />}>
          {/* <Route element={<Footer />}> */}
          <Route path="/" element={<Landing />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
