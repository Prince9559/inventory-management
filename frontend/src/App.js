import ProductForm from "./components/ProductForm/ProductForm";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import ToastProvider from "./components/ToastProvider";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Inventory Management System</h1>
      <ProductForm />
      <SearchBar />
      <CategoryFilter />
      <ProductList />
      <ToastProvider />
    </div>
  );
}

export default App;