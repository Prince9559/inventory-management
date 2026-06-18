import { useState } from "react";
import API from "../services/api";
import useProductContext from "../../hooks/useProductContext";
import "./ProductForm.css";
import { toast } from "react-toastify";

function ProductForm() {
  const { fetchProducts } = useProductContext();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/", formData);

      console.log("Success:", response.data);
      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: "",
      });

      await fetchProducts();

      toast.success("Product Added Successfully");
    } catch (error) {
      console.log("Error:", error);
      console.log("Response:", error.response);
      console.log("Data:", error.response?.data);

      toast.error(
        error?.response?.data?.message || error.message ||  "Something went wrong",
      );
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required/>
        <input type="text" name="category"placeholder="Category" value={formData.category}onChange={handleChange}required/>
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange}required/>
        <input type="number" name="quantity"placeholder="Quantity" value={formData.quantity} onChange={handleChange}required/>
        <input type="number" name="minStock" placeholder="Min Stock" value={formData.minStock}onChange={handleChange}required/>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
