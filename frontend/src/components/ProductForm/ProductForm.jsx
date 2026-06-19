import { useState, useEffect } from "react";
import API from "../services/api";
import useProductContext from "../../hooks/useProductContext";
import "./ProductForm.css";
import { toast } from "react-toastify";

function ProductForm() {
  const {
    fetchProducts,
    editProduct,
    isEditing,
    setIsEditing,
    setEditProduct,
  } = useProductContext();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: "",
  });

  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        category: editProduct.category,
        price: editProduct.price,
        quantity: editProduct.quantity,
        minStock: editProduct.minStock,
      });
    }
  }, [editProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await API.put(`/${editProduct._id}`, formData);
        toast.info("Product Updated Successfully");
        setIsEditing(false);
        setEditProduct(null);
      } else {
        await API.post("/", formData);
        toast.success("Product Added Successfully");
      }

      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: "",
      });

      await fetchProducts();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="product-form-container">
      <h2>{isEditing ? "Update Product" : "Add Product"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="minStock"
          placeholder="Min Stock"
          value={formData.minStock}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
