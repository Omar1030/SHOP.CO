import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import RatingAndReviews from "./ratingandreviews";
import ProductInfo from "./productinfo";
import FAQs from "./faq";
import RelatedProducts from "./related-products";

import Loader from "../../components/UI/loader";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [tab, setTab] = useState("Rating & Reviews");
  const [quantity, setQuantity] = useState(0);
  const loading = useSelector((state) => state.products.isLoading);

  // provide safe defaults in case slices are not yet populated
  const products = useSelector((state) => state.products.products) ?? [];

  // // show loading until store is populated
  // if (products.length === 0) {
  //   return <div className="container mx-auto px-4 pt-10">Loading product...</div>;
  // }

  const product = products.find((p) => Number(p.id) === productId);

  // if (!product) {
  //   return <div className="container mx-auto px-4 pt-10">Product not found</div>;
  // }

  if (loading) {
    return <Loader />;
  } else {
    return (
      <section className="container mx-auto px-4 pt-[40px] border-t-1 border-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-[10%_35%_50%] gap-y-3 gap-x-6">
          <div className="col">
            <figure id="thumbnail" className="flex justify-center bg-gray-100 rounded-xl h-full">
              <img src={product.thumbnail} alt={product.title} />
            </figure>
          </div>
          <div className="col lg:order-first">
            <div className="grid grid-cols-3 lg:grid-cols-1 h-full gap-4">
              {product.images.slice(0, 3)?.map((image, index) => (
                <div key={index} className="bg-gray-100 rounded-xl">
                  <img src={image} alt={`${product.title.split(" ").join("-")}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col">
            <h1 id="title" className="text-2xl font-black text-(--main-black)">
              {product.title}
            </h1>
            <article id="rate" className="flex gap-3 my-2">
              <ul className="flex gap-1">
                <li>
                  <FontAwesomeIcon icon="fa-solid fa-star" className="text-yellow-500" />
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-solid fa-star" className="text-yellow-500" />
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-solid fa-star" className="text-yellow-500" />
                </li>
                <li>
                  <FontAwesomeIcon icon="fa-solid fa-star" className="text-yellow-500" />
                </li>
              </ul>
              <span className="font-medium text-(--text-gray)">{product.rating}</span>
            </article>
            <article id="price" className="flex gap-4 text-lg mb-4">
              <span className="font-bold">${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</span>
              <span className="line-through text-gray-400 font-bold">${product.price}</span>
              <span className="bg-red-300 text-white rounded-full px-3">- {product.discountPercentage}%</span>
            </article>
            <p id="info" className="text-(--text-gray)">
              {product.description}
            </p>
            <article id="size" className="border-t-1 border-gray-300 py-3 my-3">
              <h2 className="font-medium text-(--text-gray) mb-3">Choose Size</h2>
              <div className="flex flex-wrap justify-start gap-2">
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Small</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Medium</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Large</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Large</span>
              </div>
            </article>
            <article id="actions" className="flex  flex-wrap justify-between border-t-1 border-gray-300 py-3">
              <fieldset className="flex justify-around bg-[#eee] py-2 rounded-3xl font-medium  w-[40%]">
                <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className="use-select-none cursor-pointer">
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => quantity < product.minimumOrderQuantity && setQuantity(quantity + 1)} className="use-select-none cursor-pointer">
                  +
                </button>
              </fieldset>
              <button className="w-[55%] bg-(--main-black) text-(--main-white) py-2 rounded-3xl">Add to Cart</button>
            </article>
          </div>
        </div>
        <ul id="tabs" className="flex justify-between md:justify-around border-b-1 border-gray-200 mt-[50px]">
          <li onClick={(e) => setTab(e.target.innerText)} className={`border-b-2 pb-2 text-base md:text-2xl font-medium duration-300 cursor-pointer ${tab == "Product Details" ? "text-(--main-black) border-(--main-black)" : "text-(--text-gray) border-[transparent]"}`}>
            Product Details
          </li>
          <li onClick={(e) => setTab(e.target.innerText)} className={`border-b-2 pb-2 text-base md:text-2xl font-medium duration-300 cursor-pointer ${tab == "Rating & Reviews" ? "text-(--main-black)" : "text-(--text-gray) border-[transparent]"}`}>
            Rating & Reviews
          </li>
          <li onClick={(e) => setTab(e.target.innerText)} className={`border-b-2 pb-2 text-base md:text-2xl font-medium duration-300 cursor-pointer ${tab == "FAQs" ? "text-(--main-black)" : "text-(--text-gray) border-[transparent]"}`}>
            FAQs
          </li>
        </ul>
        <div className="container mx-auto h-[250px] py-5 overflow-scroll scrollbar-hide">{tab == "Product Details" ? <ProductInfo /> : tab == "Rating & Reviews" ? <RatingAndReviews product={product} /> : <FAQs />}</div>
        <RelatedProducts />
      </section>
    );
  }
};

export default ProductDetail;
