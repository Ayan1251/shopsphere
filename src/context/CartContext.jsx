import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // SAFE INITIAL LOAD
  const [cart, setCart] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem("cart"));
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    if (!product || !product.id) return;

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      ));

      toast.info("🛒 Quantity updated");
    } else {
      setCart([
        ...cart,
        {
          ...product,
          price: Number(product.price) || 0,
          qty: 1
        }
      ]);

      toast.success("✅ Added to cart");
    }
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("❌ Removed from cart");
  };

  // UPDATE QTY (SAFE)
  const updateQty = (id, qty) => {
    const newQty = Number(qty);

    if (!newQty || newQty < 1) return;

    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: newQty }
        : item
    ));

    toast.info("🔄 Quantity updated");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};