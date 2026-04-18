import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";

const CategoryFilter = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    loadCategories();
  }, []);

  const handleClick = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  return (
    <div className="flex gap-2 mb-4 flex-wrap">

      {/* ALL BUTTON */}
      <button
        onClick={() => handleClick("all")}
        className={`px-3 py-1 rounded cursor-pointer transition ${
          active === "all"
            ? "bg-black text-white"
            : "border hover:bg-gray-200"
        }`}
      >
        All
      </button>

      {/* CATEGORY BUTTONS */}
      {(categories || []).map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-3 py-1 rounded cursor-pointer transition ${
            active === cat
              ? "bg-black text-white"
              : "border hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;