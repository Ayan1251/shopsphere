import { Link } from "react-router-dom";

const ProductCard = ({ p }) => {
  return (
    <div className="border p-4 rounded-xl shadow hover:scale-105 transition">
      <img src={p.image} className="h-32 mx-auto" />
      <h2 className="text-sm font-semibold mt-2">{p.title}</h2>
      <p className="text-green-600 font-bold">₹{p.price}</p>
      <Link to={`/product/${p.id}`}>
        <button className="mt-2 bg-black cursor-pointer text-white px-3 py-1 rounded">
          View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;