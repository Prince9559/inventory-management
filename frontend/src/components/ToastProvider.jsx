import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastProvider() {
  return (
    <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
  );
}

export default ToastProvider;