// ! React
import { useState } from "react";
import ProductCard from "../components/UI/product-card";
import SkeletonCard from "../components/UI/skeleton-card";
import Pagination from "../components/UI/pagonation";

// ! Redux
import { useSelector } from "react-redux";

// ! MUI / Icons
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import CloseIcon from "@mui/icons-material/Close";

// ! MUI / Components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Shop = () => {
  const products = useSelector((state) => state.products.products) ?? [];
  const loading = useSelector((state) => state.products.isLoading);
  const [openMen, setOpenMen] = useState(false);
  const [openWomen, setOpenWomen] = useState(false);
  const [value, setValue] = useState([20, 80]);
  const [openFilter, setOpenFilter] = useState(false);

  // ? Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  let lastIndex = currentPage * productPerPage;
  let firstIndex = lastIndex - productPerPage;

  const currentProducts = products.slice(firstIndex, lastIndex);

  const handleClickMen = () => {
    setOpenMen(!openMen);
  };

  const handleClickWomen = () => {
    setOpenWomen(!openWomen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="container mx-auto px-4 pt-[40px] border-t-1 border-gray-300">
      <div className="grid lg:grid-cols-[300px_1fr] gap-4">
        {/*  Filter for Mobile */}
        <div id="overlay" className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10 ${openFilter ? "block" : "hidden"}`}></div>
        <section id="filter" className={`absolute top-[100px] left-[10px] right-[10px] bottom-0 h-[calc(120vh)] bg-white rounded-lg p-5 z-11 ${openFilter ? "block" : "hidden"}`}>
          <article id="filter-header" className="flex justify-between items-center border-b-1 border-gray-300 pb-4">
            <h2 className="text-xl font-medium">Filter</h2>
            <CloseIcon className="text-xl font-medium" onClick={() => setOpenFilter(!openFilter)} />
          </article>

          {/*  Categories */}
          <article id="categories" className="border-b-1 border-gray-300 ">
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
              {/*  Men */}
              <ListItemButton onClick={handleClickMen}>
                <ListItemIcon>
                  <ManIcon />
                </ListItemIcon>
                <ListItemText primary="Men" />
                {openMen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openMen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Shirts" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Shoes" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Watches" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
              </Collapse>

              {/*  Women */}
              <ListItemButton onClick={handleClickWomen}>
                <ListItemIcon>
                  <WomanIcon />
                </ListItemIcon>
                <ListItemText primary="Women" />
                {openWomen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openWomen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Dresses" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Shoes" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Bags" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding sx={{}}>
                  <ListItemButton sx={{}}>
                    <ListItemText primary="Jewellery" />
                    <KeyboardArrowRightIcon />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </article>

          {/*  Price */}
          <article id="Price" className="border-b-1 border-gray-300 py-3">
            <h2 className="text-xl font-medium">Price</h2>
            <Slider sx={{ color: "black" }} getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} />
          </article>

          {/*  Size */}
          <article id="size" className="py-3">
            <h2 className="text-xl font-medium pb-3">Size</h2>
            <div className="flex flex-wrap justify-start gap-4">
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">XX-Small</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Small</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Small</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Medium</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Large</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Large</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">XX-Large</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">3X-Large</span>
              <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">4X-Large</span>
            </div>
          </article>
        </section>

        {/*  Right Section : Filter for Desktop */}
        <div className="hidden lg:block">
          {/*  Filter */}
          <section id="filter" className="border-1 border-gray-300 rounded-lg p-5 h-[calc(92vh)]">
            <article id="filter-header" className="flex justify-between items-center border-b-1 border-gray-300 pb-4">
              <h2 className="text-xl font-medium">Filter</h2>
              <TuneIcon className="text-xl font-medium" />
            </article>

            {/*  Categories */}
            <article id="categories" className="border-b-1 border-gray-300 ">
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} component="nav" aria-labelledby="nested-list-subheader">
                <ListItemButton onClick={handleClickMen}>
                  <ListItemIcon>
                    <ManIcon />
                  </ListItemIcon>
                  <ListItemText primary="Men" />
                  {openMen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openMen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Shirts" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Shoes" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Watches" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton onClick={handleClickWomen}>
                  <ListItemIcon>
                    <WomanIcon />
                  </ListItemIcon>
                  <ListItemText primary="Women" />
                  {openWomen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openWomen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Dresses" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Shoes" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Bags" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding sx={{}}>
                    <ListItemButton sx={{}}>
                      <ListItemText primary="Jewellery" />
                      <KeyboardArrowRightIcon />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </article>

            {/* Price */}
            <article id="Price" className="border-b-1 border-gray-300 py-3">
              <h2 className="text-xl font-medium">Price</h2>
              <Slider sx={{ color: "black" }} getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} />
            </article>

            {/* Size */}
            <article id="size" className="py-3">
              <h2 className="text-xl font-medium pb-3">Size</h2>
              <div className="flex flex-wrap justify-start gap-4">
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">XX-Small</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Small</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Small</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Medium</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">Large</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">X-Large</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">XX-Large</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">3X-Large</span>
                <span className="bg-[#eee] px-3 py-1 rounded-3xl text-gray-600 font-light">4X-Large</span>
              </div>
            </article>
          </section>
        </div>

        {/*  Left Section : Products */}
        <div className="min-h-[calc(100vh-250px)] relative pb-[100px] mb-[300px] md:mb-[200px]">
          {/* Icon Filter for Mobile */}
          <article className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Our Products</h2>
            <TuneIcon sx={{ fontSize: "2rem", cursor: "pointer", display: { xs: "block", lg: "none" } }} onClick={() => setOpenFilter(!openFilter)} className={`${openFilter ? "rotate-180" : "rotate-0"}`} />
          </article>

          {/*  Products */}
          <article className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">{loading ? Array.from({ length: productPerPage }).map((_, i) => <SkeletonCard key={i} className="w-full" />) : currentProducts.filter(Boolean).map((product) => <ProductCard key={product.id} src={product.thumbnail} title={product.title} price={product.price} id={product.id} />)}</article>

          {/*  Pagination */}
          <Pagination numproducts={34} productsperpage={productPerPage} setpage={setCurrentPage} currentpage={currentPage} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
