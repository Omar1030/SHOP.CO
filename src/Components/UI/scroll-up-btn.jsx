import { Link } from "react-router";
import { useState } from "react";

export default function ScrollUpBtn() {
  const [upBtn, setUpBtn] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 800 ? setUpBtn(true) : setUpBtn(false);
  });

  document.addEventListener("click", (e) => {
    if (e.target.id == "up-btn" || e.target.id == "up-btn-icon") {
      window.scrollTo({ top: 0 });
    }
  });

  return (
    <Link to="/">
      <i id="up-btn-icon" className={`fa-solid fa-up-long text-[20px] fixed bottom-[20px] ${upBtn ? "right-[20px]" : "right-[-70px]"} w-[50px] h-[50px] p-[15px_18px] bg-white shadow-[0px_3px_8px_gray] rounded-full hover:shadow-none hover:bg-black hover:text-white duration-300 cursor-pointer z-3`}></i>;
    </Link>
  );
}
