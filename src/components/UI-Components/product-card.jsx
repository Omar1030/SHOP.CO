export default function ProductCard(props) {
  return (
    <article className="product-card">
      <figure className="card-img overflow-hidden">
        <img src={props.src} alt="product-img" loading="lazy" className="rounded-xl aspect-square object-fill w-full h-full hover:scale-[1.1] duration-300 cursor-pointer" />
      </figure>
      <p className="card-title font-semibold ms-2 mt-2">{props.title}</p>
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
