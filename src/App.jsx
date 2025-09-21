import { Routes, Route } from "react-router";

import Landing from "./Pages/Landing.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Shop from "./Pages/Shop.jsx";
import Error from "./Pages/Error.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
