import { imgs } from "../../assets/imgs/imgs";

export default function Footer() {
  return (
    <footer id="footer" className="bg-(--main-gray) mt-[200px] sm:mt-[175px] md:mt-[80px] lg:mt-[100px]">
      <div className="container mx-auto relative px-4 pt-[70px] pb-[35px]">
        <article id="contact" className="absolute top-[-225px] sm:top-[-200px] md:top-[-105px] lg:top-[-120px] left-0 right-0 flex flex-col md:flex-row md:justify-between md:items-center bg-(--main-black) text-white mx-4 rounded-2xl p-4">
          <p className="font-extrabold text-4xl lg:w-[440px] xl:w-[500px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
          <article>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-[18px] top-[28px] text-(--text-gray)"></i>
              <input type="email" placeholder="Enter your email" className="outline-[0] bg-white text-(--text-gray) placeholder:text-(--text-gray) w-full ps-[40px] py-3 rounded-3xl my-3" />
            </div>
            <input type="button" value="Subscribe to Newsletter" className="w-full bg-white text-black font-bold px-4 py-3 rounded-3xl" />
          </article>
        </article>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 mb-4">
          <div className="col col-span-2 md:col-span-4 lg:col-span-1">
            <div id="logo" className="font-extrabold text-[32px]">
              SHOP.CO
            </div>
            <p className="text-(--text-gray) max-w-[450px] lg:max-w-[225px]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <ul id="social-links" className="flex gap-3 mt-5 mb-6">
              <li className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white duration-300 hover:bg-black hover:text-white cursor-pointer">
                <a href="" aria-label="Visit our Twitter page">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white duration-300 hover:bg-black hover:text-white cursor-pointer">
                <a href="" aria-label="Visit our Facebook page">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white duration-300 hover:bg-black hover:text-white cursor-pointer">
                <a href="" aria-label="Visit our Instagram page">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white duration-300 hover:bg-black hover:text-white cursor-pointer">
                <a href="" aria-label="Visit our Pinterest page">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-span-1 xl:ps-[55px]">
            <h4 className="text-xl tracking-wider font-medium mb-2">Company</h4>
            <ul className="text-(--text-gray) font-light">
              <li className="mb-[7px]">About</li>
              <li className="mb-[7px]">Features</li>
              <li className="mb-[7px]">Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="col col-span-1 xl:ps-[55px]">
            <h4 className="text-xl tracking-wider font-medium mb-2">Help</h4>
            <ul className="text-(--text-gray) font-light">
              <li className="mb-[7px]">Customer Support</li>
              <li className="mb-[7px]">Delivery Details</li>
              <li className="mb-[7px]">Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col col-span-1 xl:ps-[55px]">
            <h4 className="text-xl tracking-wider font-medium mb-2">FAQ</h4>
            <ul className="text-(--text-gray) font-light">
              <li className="mb-[7px]">Account</li>
              <li className="mb-[7px]">Manage Deliveries</li>
              <li className="mb-[7px]">Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="col col-span-1 xl:ps-[55px]">
            <h4 className="text-xl tracking-wider font-medium mb-2">Resources</h4>
            <ul className="text-(--text-gray) font-light">
              <li className="mb-[7px]">Free eBooks</li>
              <li className="mb-[7px]">Development Tutorial</li>
              <li className="mb-[7px]">How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <hr className="text-gray-300 mb-5" />
        <article className="flex flex-col md:flex-row gap-3 justify-between items-center">
          <p className="text-(--text-gray) mb-2">© 2019-2023, All rights reserved</p>
          <ul className="flex">
            <li>
              <img src={imgs["Badge"]} alt="visa-card" />
            </li>
            <li>
              <img src={imgs["BadgeOne"]} alt="master-card" />
            </li>
            <li>
              <img src={imgs["BadgeTwo"]} alt="paypal-card" />
            </li>
            <li>
              <img src={imgs["BadgeThree"]} alt="apple-card" />
            </li>
            <li>
              <img src={imgs["BadgeFour"]} alt="google-card" />
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}
