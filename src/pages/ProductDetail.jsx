import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import { useParams } from "react-router";

import { useSelector } from "react-redux";

import { imgs } from "../assets/imgs/imgs";
const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const menShirts = useSelector((state) => state.menProducts.shirts);
  const menShoes = useSelector((state) => state.menProducts.shoes);
  const menWatches = useSelector((state) => state.menProducts.watches);
  const womenDresses = useSelector((state) => state.womenProducts.dresses);
  const womenShoes = useSelector((state) => state.womenProducts.shoes);
  const womenWatches = useSelector((state) => state.womenProducts.watches);
  const womenBags = useSelector((state) => state.womenProducts.bags);
  const womenJewellery = useSelector((state) => state.womenProducts.jewellery);

  const allProducts = [...menShirts, ...menShoes, ...menWatches, ...womenDresses, ...womenShoes, ...womenWatches, ...womenBags, ...womenJewellery];

  const product = allProducts.find((product) => product.id == id);

  return (
    <section className="container mx-auto px-4  pt-[40px] border-t-1 border-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3">
        <div className="col">
          <figure id="thumbnail" className="flex justify-center bg-gray-100 rounded-xl">
            <img src={product["thumbnail"]} alt="thumbnail-product" />
          </figure>
        </div>
        <div className="col lg:order-first">
          <div className="grid grid-cols-3 lg:grid-cols-1 justify-around mt-3 gap-4">
            <div className="bg-gray-100 rounded-xl">
              <img src={product["images"][0]} alt="thumbnail-product" />
            </div>
            <div className="bg-gray-100 rounded-xl">
              <img src={product["images"][1]} alt="thumbnail-product" />
            </div>
            <div className="bg-gray-100 rounded-xl">
              <img src={product["images"][2]} alt="thumbnail-product" />
            </div>
          </div>
        </div>
        <div className="col">
          <h1 id="title" className="text-2xl font-black text-(--main-black)">
            {product["title"]}
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
            <span className="font-medium text-(--text-gray)">{product["rating"]}</span>
          </article>
          <article id="price" className="flex gap-4 text-lg mb-4">
            <span className="font-bold">{product["price"]}</span>
            <span className="line-through text-gray-400 font-bold">$300</span>
            <span className="bg-red-300 text-white rounded-full px-3">- {product["discountPercentage"]}%</span>
          </article>
          <p id="info" className="text-(--text-gray)">
            {product["description"]}
          </p>
          <article id="size" className="border-t-1 border-gray-300 py-3 my-3">
            <h2 className="font-medium text-(--text-gray) mb-3">Choose Size</h2>
            <div className="flex justify-between">
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Small</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Medium</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Large</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Large</span>
            </div>
          </article>
          <article id="actions" className="flex justify-between border-t-1 border-gray-300 py-3">
            <fieldset className="flex justify-around bg-[#eee] py-2 rounded-3xl font-medium  w-[40%]">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </fieldset>
            <button className="w-[55%] bg-(--main-black) text-(--main-white) py-2 rounded-3xl">Add to Cart</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
