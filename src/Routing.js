import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { Login } from "@mui/icons-material";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/update-product" element={<UpdateProduct />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};
