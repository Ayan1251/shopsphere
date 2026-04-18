import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  // SAFE TOTAL (NaN FIX 🔥)
  const total = (cart || []).reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.qty) || 1),
    0
  );

  return (
    <div className="p-6">

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <h2 className="text-center text-gray-500 text-lg">
          Your cart is empty 🛒
        </h2>
      ) : (
        <>
          {/* CART ITEMS */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4 hover:shadow-lg transition"
            >
              
              {/* LEFT: IMAGE + TITLE */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-sm md:text-base">
                    {item.title}
                  </h2>
                  <p className="text-green-600 font-bold">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* MIDDLE: QTY */}
              <input
                type="number"
                min="1"
                value={item.qty || 1}
                onChange={(e) =>
                  updateQty(item.id, Number(e.target.value) || 1)
                }
                className="w-16 border rounded p-1 text-center"
              />

              {/* RIGHT: REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 cursor-pointer text-xl hover:scale-110 transition"
              >
                ❌
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">
              Total: ₹{total.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;