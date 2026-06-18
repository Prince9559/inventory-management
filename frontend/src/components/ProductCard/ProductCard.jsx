import API from "../services/api";
import "./ProductCard.css";
import { toast } from "react-toastify";

function ProductCard({ product, fetchProducts }) 
{
  const deleteProduct = async () => {
  try {
    await API.delete(`/${product._id}`);
    await fetchProducts();
    toast.success("Product Deleted Successfully");
  } catch (error) 
  {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  const isLowStock =product.quantity <= product.minStock;

  return (
    <div className={`product-card ${isLowStock ? "low-stock" : ""}`}>
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ₹{product.price}</p>

      <p>Quantity: {product.quantity}</p>

      <p>Min Stock: {product.minStock}</p>

      {isLowStock && (
        <span className="badge">
          Low Stock
        </span>
      )}

      <button onClick={deleteProduct}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;