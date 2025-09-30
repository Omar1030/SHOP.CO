import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../components/UI/loader";

const Landing = lazy(() => import("../pages/landing/Landing"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/Cart"));
const Error = lazy(() => import("../pages/Error"));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<Landing />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
