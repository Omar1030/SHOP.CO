import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <article className="product-card">
      <Link to={`/product-detail/${props.id}`}>
        <figure className="card-img rounded-xl overflow-hidden">
          <img src={props.src} alt="product-img" loading="lazy" className="bg-gray-100  aspect-square object-fill w-full h-full hover:scale-[1.1] duration-300 cursor-pointer" />
        </figure>
      </Link>
      <p className="card-title  ms-2 mt-2 line-clamp-2 text-sm font-semibold min-h-[2.5rem] ">{props.title}</p>
      <ul className="flex">
        <li className="ms-2">
          <i className="fa-solid fa-star text-yellow-500"></i>
        </li>
        <li className="ms-2">
          <i className="fa-solid fa-star text-yellow-500"></i>
        </li>
        <li className="ms-2">
          <i className="fa-solid fa-star text-yellow-500"></i>
        </li>
        <li className="ms-2">
          <i className="fa-solid fa-star text-yellow-500"></i>
        </li>
        <li className="ms-2">
          <i className="fa-solid fa-star text-yellow-500"></i>
        </li>
      </ul>
      <p className="card-price font-bold text-[20px] ms-2">{props.price}</p>
    </article>
  );
}
