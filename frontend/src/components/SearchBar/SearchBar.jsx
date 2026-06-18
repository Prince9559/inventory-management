import "./SearchBar.css";
import useProductContext from "../../hooks/useProductContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } =
    useProductContext();

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;