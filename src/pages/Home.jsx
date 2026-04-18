import { useEffect, useState } from "react";
import { fetchProducts, fetchByCategory } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // FETCH PRODUCTS
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        let data = [];

        if (category === "all") {
          data = await fetchProducts();
        } else {
          data = await fetchByCategory(category);
        }

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products ❌");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [category]);

  // SEARCH FILTER (extra safe)
  const filtered = (products || []).filter((p) =>
    p?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* SEARCH */}
      <SearchBar setSearch={setSearch} />

      {/* CATEGORY FILTER */}
      <CategoryFilter setCategory={setCategory} />

      {/* LOADING */}
      {loading && (
        <div className="text-center text-gray-500 mt-6">
          Loading products... ⏳
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-center text-red-500 mt-6">
          {error}
        </div>
      )}

      {/* PRODUCTS */}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 mt-6">
              No products found 😢
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;