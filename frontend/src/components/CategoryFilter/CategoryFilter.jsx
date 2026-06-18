import "./CategoryFilter.css";

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filter-container">
      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >
        <option value="">All Categories</option>

        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;