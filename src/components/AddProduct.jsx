import { Typography, Grid } from "@mui/material";
import InputField from "./UI/InputField";
import InputMultiline from "./UI/InputMultiline";
import InputSelect from "./UI/InputSelect";
import { useState } from "react";
import AddProductImg from "../assets/images/add-new-product.jpg";
import ButtonComponent from "./UI/Button";
import useFetchData from "../hooks/useFetchData";
import ProductURL from "../api/api";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    count: "",
    category: "",
    rating: "",
  });

  const addNewProductHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",

          /*     title: formData.title,
          description: formData.description,
          price: formData.price,
          count: formData.count,
          category: formData.category,
          rating: formData.rating, */
        }),
      });

      const data = await response.json();

      console.log("add new product", data);
    } catch (error) {
      console.log("Failed add new product", error);
    }
  };

  // console.log("formData", formData);

  /*   const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }; */

  return (
    <div className="addProjectPage">
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={AddProductImg} alt="Add New Product" />
        </Grid>
        <Grid item xs={6}>
          <form>
            <InputField
              label="title"
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ title: e.target.value })}
            />
            <InputMultiline
              label="description"
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ description: e.target.value })}
            />
            <InputField
              label="price"
              id="price"
              name="price"
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ price: e.target.value })}
            />
            <InputField
              label="count"
              id="count"
              name="count"
              type="text"
              value={formData.count}
              onChange={(e) => setFormData({ count: e.target.value })}
            />
            <InputField
              label="rating"
              id="rating"
              name="rating"
              type="text"
              value={formData.rating}
              onChange={(e) => setFormData({ rating: e.target.value })}
            />
            <InputSelect
              label="category"
              name="category"
              value={formData.category}
              onChange={(e) => setFormData({ category: e.target.value })}
            />
            <ButtonComponent
              label="Add Product"
              onClick={addNewProductHandler}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddProduct;
