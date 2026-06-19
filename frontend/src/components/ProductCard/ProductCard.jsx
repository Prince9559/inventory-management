import API from "../services/api";
import "./ProductCard.css";
import { toast } from "react-toastify";
import useProductContext from "../../hooks/useProductContext";

function ProductCard({ product, fetchProducts }) {
  const {setEditProduct,setIsEditing,} = useProductContext();

  const deleteProduct = async () => {
    try {
      await API.delete(`/${product._id}`);
      await fetchProducts();
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const isLowStock = product.quantity <= product.minStock;

  return (
    <div
      className={`product-card ${isLowStock ? "low-stock" : ""}`}>
      <h3>{product.name}</h3>

      <p>
        Category: {product.category}
      </p>

      <p>Price: ₹{product.price}</p>

      <p>
        Quantity: {product.quantity}
      </p>

      <p>
        Min Stock: {product.minStock}
      </p>

      {isLowStock && (
        <span className="badge">Low Stock</span>
      )}

      <div className="btn-group">
        <button className="edit-btn" onClick={() => {setEditProduct(product);setIsEditing(true); window.scrollTo({top: 0,behavior: "smooth",}); }}>Edit</button>
        <button className="delete-btn" onClick={deleteProduct}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;