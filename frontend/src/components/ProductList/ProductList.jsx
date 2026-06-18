import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({
  products,
  fetchProducts,
}) {
  return (
    <div className="product-list">
      {products.map((product) => (
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