import { imgs } from "./assets/imgs/imgs";
import ProductCard from "./components/UI-Components/product-card";

export default function TopSelling() {
  let { Nineteen, Eight, Ten, Twelve } = imgs;
  return (
    <section id="new-arrival">
      <div className="container mx-auto px-4 py-[70px]">
        <h1 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">TOP SELLING</h1>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 lg:grid-cols-[250px_250px_250px_250px] gap-3 justify-center">
          <ProductCard src={Nineteen} title={"VERTICAL STRIPED SHIRT"} price={"$212"} />
          <ProductCard src={Eight} title={"COURAGE GRAPHIC T-SHIRT"} price={"$145"} />
          <ProductCard src={Ten} title={"LOOSE FIT BERMUDA SHORTS"} price={"$80"} />
          <ProductCard src={Twelve} title={"FADED SKINNY JEANS"} price={"$210"} />
        </div>
        <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer">View All</button>
      </div>
    </section>
  );
}
