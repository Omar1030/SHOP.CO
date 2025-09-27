import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router";
export default function Navbar() {
  let [menuMobile, setMenuMobile] = useState(false);
  let [topNav, setTopNav] = useState(true);

  // ! Block Scroll on Mobile Menu
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden");
  }, [menuMobile]);

  return (
    <nav id="navbar">
      {/* --- Menu of mobile --- */}
      <div id="navbar-nav-mobile-menu" className={`lg:hidden fixed ${menuMobile ? "left-0" : "left-[-100%]"} w-full h-full bg-(--main-gray) text-center duration-[0.4s] z-10`}>
        <div id="x-icon" className="absolute right-[50px] top-[30px] size-fit" onClick={() => setMenuMobile(false)}>
          <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
        </div>
        <ul id="navbar-nav-items" className="py-[70px]">
          <li className="mb-3 text-xl font-bold" onClick={() => setMenuMobile(false)}>
            <a href="#" aria-label="Go to shop page">
              Shops
            </a>
          </li>
          <li className="mb-3 text-xl font-bold" onClick={() => setMenuMobile(false)}>
            <a href="#new-arrivals" aria-label="Go to new arrivals section">
              New Arrivals
            </a>
          </li>
          <li className="mb-3 text-xl font-bold" onClick={() => setMenuMobile(false)}>
            <a href="#top-selling" aria-label="Go to top selling section">
              Top Selling
            </a>
          </li>
          <li className="mb-3 text-xl font-bold" onClick={() => setMenuMobile(false)}>
            <a href="#" aria-label="Go to brands section">
              Brands
            </a>
          </li>
        </ul>
      </div>

      <article id="navbar-signup" className={`bg-(--main-black) ${topNav ? "block" : "hidden"}`}>
        <div className="container mx-auto py-2 relative text-(--main-white) text-center">
          <p id="signup-text" className="text-[12px] sm:text-base">
            Sign up and get 20% off to your first order. <span className="underline cursor-pointer">Sign Up Now</span>
          </p>
          <div id="close-icon" className="absolute inset-y-0 right-0 py-[10px] pr-[40px] hidden lg:block cursor-pointer" onClick={() => setTopNav(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </article>

      <article id="navbar-nav" className="bg-(--white) py-3">
        <div className="container mx-auto px-4  flex justify-between ">
          <div id="navbar-nav-left" className="flex items-center gap-3 text-(--main-black) cursor-pointer">
            <div id="bars-icon" className="flex items-center justify-center lg:hidden border-2 rounded-sm p-1 " onClick={() => setMenuMobile(true)}>
              <i className="fa-solid fa-bars text-[22px] md:text-[25px]"></i>
            </div>
            <div id="logo" className="font-extrabold text-[25px] md:text-[32px]">
              SHOP.CO
            </div>
          </div>
          <div id="navbar-nav-center" className="hidden lg:flex items-center justify-center gap-5">
            <ul id="navbar-nav-items" className="flex items-center gap-4 text-(--main-black) cursor-pointer">
              <li>
                {/* <el-dropdown className="inline-block">
                  <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md p-1 inset-ring-1 inset-ring-white/5 cursor-pointer">
                    Shop
                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                  </button>
                  <el-menu anchor="bottom end" popover="manual" className="shadow-xl/20 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-(--main-white) outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm border-b border-(--main-gray) focus:outline-hidden" aria-label="Go to men's clothing">
                        Men
                      </a>
                    </div>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm border-b border-(--main-gray) focus:outline-hidden" aria-label="Go to women's clothing">
                        Female
                      </a>
                    </div>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm focus:outline-hidden" aria-label="Go to children's clothing">
                        Children
                      </a>
                    </div>
                  </el-menu>
                </el-dropdown> */}
              </li>
              <li>
                <a href="#new-arrivals" aria-label="Go to new arrivals section">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#top-selling" aria-label="Go to top selling section">
                  Top Selling
                </a>
              </li>
              <li>
                <a href="#brands" aria-label="Go to brands section">
                  Brands
                </a>
              </li>
            </ul>
            <input type="search" placeholder="search for products..." className="xl:min-w-[450px] rounded-full bg-(--main-gray) outline-0 px-5 py-2" />
          </div>
          <div id="navbar-nav-right" className="flex text-(--main-black) cursor-pointer">
            <ul className="flex items-center">
              <li className="text-[22px] md:text-[22px] lg:hidden">
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li className="text-[22px] md:text-[22px] mx-1">
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <li className="text-[22px] md:text-[22px]">
                <i className="fa-solid fa-circle-user"></i>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </nav>
  );
}
