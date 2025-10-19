import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/UI/product-card";
import SkeletonCard from "../../components/UI/skeleton-card";

export default function RelatedProducts() {
  const { id } = useParams();
  const productId = Number(id);

  const products = useSelector((state) => state.products?.products);
  const loading = useSelector((state) => state.products?.isLoading);

  const product = products.find((p) => Number(p.id) === productId);
  const category = product.category;
  const relatedProducts = products.filter((p) => p.category === category);

  return (
    <section id="related-products" className="mb-[200px] sm:mb-[175px] md:mb-[80px] lg:mb-[100px]">
      <div className="container mx-auto px-4 py-[70px]">
        <h2 className="font-extrabold text-3xl md:text-[2.5rem] tracking-tighter text-center mb-[45px]">YOU MIGHT ALSO LIKE</h2>
        <div id="products" className="grid grid-cols-[auto_auto] md:grid-cols-4 gap-3 justify-center">
          {relatedProducts.slice(0, 4).map((product) => (loading ? <SkeletonCard /> : <ProductCard key={product.id} src={product["thumbnail"]} title={product["title"]} price={product["price"]} id={product.id} />))}
        </div>
      </div>
    </section>
  );
}
