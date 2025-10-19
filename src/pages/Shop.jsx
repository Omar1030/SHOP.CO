// ! React
import { useState } from "react";
import ProductCard from "../components/UI/product-card";
import SkeletonCard from "../components/UI/skeleton-card";

// ! Redux
import { useSelector } from "react-redux";

// ! MUI
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

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
      <div className="grid grid-cols-[300px_1fr] gap-4">
        <div className="border-1 border-gray-300 rounded-lg h-[calc(100vh-100px)]">
          <section id="filter" className="p-5">
            <article id="filter-header" className="flex justify-between items-center border-b-1 border-gray-300 pb-4">
              <h2 className="text-xl font-medium">Filter</h2>
              <TuneIcon className="text-xl font-medium" />
            </article>

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

            <article id="Price" className="border-b-1 border-gray-300 py-3">
              <h2 className="text-xl font-medium">Price</h2>
              <Slider sx={{ color: "black" }} getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext} />
            </article>

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
        <div className="grid grid-cols-[auto_auto] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">{products.map((product, index) => (loading ? <SkeletonCard key={index} /> : <ProductCard key={product.id} src={product.thumbnail} title={product.title} price={product.price} id={product.id} />))}</div>
      </div>
    </section>
  );
};

export default Shop;
