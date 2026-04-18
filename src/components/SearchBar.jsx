const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border p-2 w-full mb-4"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;