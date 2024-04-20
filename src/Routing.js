import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};
