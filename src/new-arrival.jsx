import { imgs } from "./assets/imgs/imgs";
import ProductCard from "./components/UI-Components/product-card";

export default function NewArrival() {
  let { Eighteen, Nine, Eleven, Thirteen } = imgs;
  return (
    <section id="new-arrival" className="py-[100px]">
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="font-bold text-[2.5rem] text-center">NEW ARRIVALS</h1>
        <div id="products" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 justify-items-center">
          <ProductCard src={Eighteen} title={"omar"} price={"120$"} />
          <ProductCard src={Nine} title={"omar"} price={"120$"} />
          <ProductCard src={Eleven} title={"omar"} price={"120$"} />
          <ProductCard src={Thirteen} title={"omar"} price={"120$"} />
        </div>
      </div>
    </section>
  );
}
