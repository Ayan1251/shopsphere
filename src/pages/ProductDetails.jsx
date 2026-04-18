import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchSingle } from "../services/api";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchSingle(id); // ✅ no .data
        setProduct(data || null);
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
      }
    };

    loadProduct();
  }, [id]);

  // LOADING STATE
  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading product... ⏳
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="h-60 mx-auto object-contain"
      />

      {/* DETAILS */}
      <h1 className="text-xl md:text-2xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <p className="text-green-600 text-lg font-bold mt-2">
        ₹{product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => addToCart(product)}
        className="bg-black cursor-pointer text-white px-4 py-2 mt-4 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;