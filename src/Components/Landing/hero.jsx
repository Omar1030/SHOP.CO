import { imgs } from "../../assets/imgs/imgs";
import { Link } from "react-router";
export default function Hero() {
  // Brand Logos
  let brands = [imgs["Gucci"], imgs["Ver"], imgs["Prada"], imgs["Zara"], imgs["Calvin"]];
  let brandWidth = [157, 167, 195, 92, 208];

  return (
    <section id="hero" className="bg-(--main-gray)">
      <div id="hero-main">
        <div className="container mx-auto px-4  pt-[40px]">
          <article id="hero-main-info">
            <h1 id="hero-head" className="w-[300px] md:w-[350px] lg:w-[480px] font-black text-[36px]/8 md:text-[40px]/10 lg:text-[36px]/14 text-(--main-black) text-medium lg:text-[60px] mb-4">
              FIND CLOTHES THAT MATCHES YOUR STYLE{" "}
            </h1>
            <p id="hero-text" className="text-(--text-gray) text-base/[25px] mb-4 md:w-[395px] lg:w-[590px]">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="/shop">
              <button className="shop-btn block max-md:w-[90%] md:w-[200px] bg-(--main-black) text-(--main-white) mx-auto md:ml-0 md:mb-[40px] py-3 rounded-full font-medium text-lg mb-4 cursor-pointer">Shop Now</button>
            </Link>
            <article id="hero-data" className="mb-4">
              <ul className="flex flex-row flex-wrap max-md:justify-center md:justify-start gap-x-5 max-md:gap-y-2 md:gap-3">
                <li className="flex flex-col items-center">
                  <span className="text-(--main-black) font-extrabold text-2xl md:text-shadow-[2px_1px_4px_#808080c7] max-lg:text-shadow-2xs">200+</span>
                  <span className="font-bold text-(--text-gray) text-[14px]">International Brands</span>
                </li>
                <li className="flex flex-col items-center min-md:border-x-1 border-gray-400 min-md:px-3">
                  <span className="text-(--main-black) font-extrabold text-2xl md:text-shadow-[2px_1px_4px_#808080c7]">2,000+</span>
                  <span className="font-bold text-(--text-gray) text-[14px]">High-Quality Products</span>
                </li>
                <li className="flex flex-col items-center ">
                  <span className="text-(--main-black) font-extrabold text-2xl md:text-shadow-[2px_1px_4px_#808080c7]">30,000+</span>
                  <span className="font-bold text-(--text-gray) text-[14px] ">Happy Customers</span>
                </li>
              </ul>
            </article>
          </article>
          <figure id="hero-main-img" className="md:hidden">
            <img src={imgs["HeroMobile"]} alt="Hero-img" loading="eager" fetchPriority="high" style={{ aspectRatio: "9/13" }} />
          </figure>
        </div>
      </div>
      <div id="hero-brands" className="bg-(--main-black)">
        <div className=" text-white flex justify-center lg:justify-evenly flex-wrap gap-[30px] py-5 lg:py-[40px]">
          {brands.map((img, indexImg) => {
            let altText = img.split("/")[4].split(".")[0] + "-logo";
            return <img src={img} alt={altText} key={indexImg} loading="lazy" width={brandWidth[indexImg]} height={38} />;
          })}
        </div>
      </div>
    </section>
  );
}
