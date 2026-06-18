import { useEffect, useState } from "react";
import API from "./components/services/api";

import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await API.get("/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Unique Categories
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // Search + Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>Inventory Management System</h1>

      <ProductForm fetchProducts={fetchProducts} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductList
        products={filteredProducts}
        fetchProducts={fetchProducts}
      />
    </div>
  );
}

export default App;