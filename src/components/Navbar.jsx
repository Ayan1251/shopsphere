import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  // total items count
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      
      {/* LOGO */}
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
        ShopSphere
      </h1>

      <div className="flex gap-6 items-center">

        {/* HOME */}
        <Link to="/" className="cursor-pointer hover:text-gray-300 transition">
          Home
        </Link>

        {/* CART */}
        <Link to="/cart" className="relative cursor-pointer hover:text-gray-300">
          Cart

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* USER NAME */}
        {user && (
          <span className="text-sm text-gray-300">
            👋 {user}
          </span>
        )}

        {/* LOGOUT */}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;