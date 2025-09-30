import { useSelector } from "react-redux";

import { Link } from "react-router";

import ProductCard from "../../components/UI/product-card";

export default function TopSelling() {
  const menShirts = useSelector((state) => state.menProducts.shirts).slice(0, 1);
  const womenDresses = useSelector((state) => state.womenProducts.dresses).slice(0, 1);
  const womenBags = useSelector((state) => state.womenProducts.bags).slice(0, 1);
  const menWatches = useSelector((state) => state.menProducts.watches).slice(0, 1);

  const products = [...menShirts, ...womenDresses, ...menWatches, ...womenBags];

  return (
    <section id="top-selling">
      <div className="container mx-auto px-4 py-[70px]">
        <h2 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">TOP SELLING</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} src={product["thumbnail"]} title={product["title"]} price={product["price"]} id={product.id}/>
          ))}
        </div>
        <Link to="/shop">
          <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">View All</button>
        </Link>
      </div>
    </section>
  );
}
