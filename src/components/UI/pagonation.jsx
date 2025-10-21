// ! MUI
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pagination = ({ numproducts, productsperpage, setpage, currentpage }) => {
  const pages = [];

  for (var i = 1; i <= Math.ceil(numproducts / productsperpage); i++) {
    pages.push(i);
  }

  return (
    <article className="text-center absolute bottom-0 ">
      <button onClick={() => setpage(currentpage - 1)} disabled={currentpage == 1} className="text-(--main-black) text-xl border-1 border-gray-300 px-[10px] py-[2px] rounded-lg cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">
        <ArrowBackIcon />
      </button>
      {pages.map((num) => {
        return (
          <button key={num} onClick={() => setpage(num)} className={` ${currentpage == num ? "bg-(--main-black) text-(--main-white)" : ""} text-(--main-black) text-xl border-1 border-gray-300 px-[10px] py-[2px] mx-2 rounded-lg cursor-pointer`}>
            {num}
          </button>
        );
      })}
      <button onClick={() => setpage(currentpage + 1)} disabled={currentpage == Math.ceil(numproducts / productsperpage)} className="text-(--main-black) text-xl border-1 border-gray-300 px-[10px] py-[2px] rounded-lg cursor-pointer hover:bg-(--main-black) hover:text-(--main-white) duration-300">
        <ArrowForwardIcon />
      </button>
    </article>
  );
};

export default Pagination;
