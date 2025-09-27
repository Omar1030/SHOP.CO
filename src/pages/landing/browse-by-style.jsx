import { imgs } from "../../assets/imgs/imgs";

export default function BrowseByStyle() {
  return (
    <section id="browse-style" className="mx-[10px] lg:mx-[10px]">
      <div className="container mx-auto px-4 lg:px-[50px] xl:px-[100px] py-[70px] bg-[#eee] rounded-[15px] md:rounded-[30px]">
        <h2 className="font-extrabold text-[2.5rem] leading-[40px] tracking-tight text-center mb-[45px]">BROWSE BY DRESS STYLEE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 relative cursor-pointer overflow-hidden">
            <p className="absolute top-[20px] left-[30px] text-[29px] xl:text-[35px] font-semibold z-2">Casual</p>
            <img src={`${imgs["TwentyThree"]}`} alt="" className="rounded-lg object-cover w-full h-[185px] md:h-full hover:scale-[1.1] duration-300" />
          </div>
          <div className="md:col-span-2 relative cursor-pointer overflow-hidden">
            <p className="absolute top-[20px] left-[30px] text-[29px] xl:text-[35px] font-semibold z-2">Formal</p>
            <img src={imgs["TwentyTwo"]} alt="" className="rounded-lg object-cover w-full h-[185px] md:h-full hover:scale-[1.1] duration-300" />
          </div>
          <div className="md:col-span-2 relative cursor-pointer overflow-hidden">
            <p className="absolute top-[20px] left-[30px] text-[29px] xl:text-[35px] font-semibold z-2">Party</p>
            <img src={imgs["Twenty"]} alt="" className="rounded-lg object-cover w-full h-[185px] md:h-full hover:scale-[1.1] duration-300" />
          </div>
          <div className="col-span-1 relative cursor-pointer overflow-hidden">
            <p className="absolute top-[20px] left-[30px] text-[29px] xl:text-[35px] font-semibold z-2">Gym</p>
            <img src={imgs["TwentyOne"]} alt="" className="rounded-lg object-cover w-full h-[185px] md:h-full hover:scale-[1.1] duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
