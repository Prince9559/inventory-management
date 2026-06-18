import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import useProductContext from "../../hooks/useProductContext";

function ProductList() {
  const { filteredProducts, fetchProducts } =
    useProductContext();

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          fetchProducts={fetchProducts}
        />
      ))}
    </div>
  );
}

export default ProductList;