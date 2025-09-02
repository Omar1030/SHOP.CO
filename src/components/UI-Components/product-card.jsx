export default function ProductCard(props) {
  return (
    <article className="product-card">
      <figure className="card-img">
        <img src={props.src} alt="product-img" loading="lazy" className="rounded-md aspect-square object-cover h-[250px]" />
      </figure>
      <p className="card-title font-medium ms-2 mt-2">{props.title}</p>
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
