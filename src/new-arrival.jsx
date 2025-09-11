import { imgs } from "./assets/imgs/imgs";
import ProductCard from "./components/UI-Components/product-card";

export default function NewArrival() {
  let { Eighteen, Nine, Eleven, Thirteen } = imgs;
  return (
    <section id="new-arrivals">
      <div className="container mx-auto px-4 py-[70px] border-b-1 border-gray-300">
        <h2 className="font-extrabold text-[2.5rem] tracking-tighter text-center mb-[45px]">NEW ARRIVALS</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 gap-3 justify-center">
          <ProductCard src={Eighteen} title={"T-SHIRT WITH TAPE DETAILS"} price={"$120$"} />
          <ProductCard src={Nine} title={"SKINNY FIT JEANS"} price={"$240"} />
          <ProductCard src={Eleven} title={"CHECKERED SHIRT"} price={"$180"} />
          <ProductCard src={Thirteen} title={"SLEEVE STRIPED T-SHIRT"} price={"$130"} />
        </div>
        <button className="text-(--main-black) text-xl border-1 border-gray-300 px-[50px] py-[10px] mt-[80px] rounded-full block mx-auto cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">View All</button>
      </div>
    </section>
  );
}
