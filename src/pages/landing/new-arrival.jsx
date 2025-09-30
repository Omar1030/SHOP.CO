import { useSelector } from "react-redux";

import { Link } from "react-router";

import ProductCard from "../../components/UI/product-card";

export default function NewArrival() {
  const menShirts = useSelector((state) => state.menProducts.shirts);

  return (
    <section id="new-arrivals">
      <div className="container mx-auto px-4 py-[70px] border-b-1 border-gray-300">
        <h2 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">NEW ARRIVALS</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 gap-3 justify-center">
          {menShirts.slice(0, 4).map((shirt) => (
            <ProductCard key={shirt.id} src={shirt["thumbnail"]} title={shirt["title"]} price={shirt["price"]} id={shirt.id}/>
          ))}
        </div>
        <Link to="/shop">
          <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">View All</button>
        </Link>
      </div>
    </section>
  );
}
