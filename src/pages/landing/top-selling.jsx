import { Link } from "react-router";

import { imgs } from "../../assets/imgs/imgs";
import ProductCard from "../../components/UI/product-card";

export default function TopSelling() {
  let { Nineteen, Eight, Ten, Twelve } = imgs;
  return (
    <section id="top-selling">
      <div className="container mx-auto px-4 py-[70px]">
        <h2 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">TOP SELLING</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 lg:grid-cols-4 gap-3">
          <ProductCard src={Nineteen} title={"VERTICAL STRIPED SHIRT"} price={"$212"} />
          <ProductCard src={Eight} title={"COURAGE GRAPHIC T-SHIRT"} price={"$145"} />
          <ProductCard src={Ten} title={"LOOSE FIT BERMUDA SHORTS"} price={"$80"} />
          <ProductCard src={Twelve} title={"FADED SKINNY JEANS"} price={"$210"} />
        </div>
        <Link to="/shop">
          <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">View All</button>
        </Link>
      </div>
    </section>
  );
}
