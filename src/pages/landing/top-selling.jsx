import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import ProductCard from "../../components/UI/product-card";

export default function TopSelling() {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);

  const categories = ["mens-shirts", "womens-dresses", "mens-shoes", "womens-shoes"];
  const newProducts = [];

  categories.forEach((category) => {
    const product = products.findLast((p) => p.category === category);
    newProducts.push(product);
  });

  return (
    <section id="top-selling">
      <div className="container mx-auto px-4 py-[70px]">
        <h2 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">TOP SELLING</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 lg:grid-cols-4 gap-3">
          {loading ? <h1>Loading.............</h1> : newProducts.map((product) => <ProductCard key={product.id} src={product.thumbnail} title={product.title} price={product.price} id={product.id} />)}
        </div>
        <Link to="/shop">
          <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">View All</button>
        </Link>
      </div>
    </section>
  );
}
