import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { Login } from "@mui/icons-material";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import NewUser from "./components/Login/NewUser";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-user" element={<NewUser />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products/add-product" element={<AddProduct />} />
      <Route path="/products/update-product" element={<UpdateProduct />} />
    </Routes>
  );
};
