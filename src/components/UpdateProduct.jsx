import { Typography, Grid } from "@mui/material";
import InputField from "./UI/InputField";
import InputMultiline from "./UI/InputMultiline";
import InputSelect from "./UI/InputSelect";
import { useState } from "react";
import UpdateProductImg from "../assets/images/update-product.jpg";
import ButtonComponent from "./UI/Button";
import useFetchData from "../hooks/useFetchData";
import { productURL } from "../api/api";

const UpdateProduct = ({ productId }) => {
  const { data, isLoading, error, setData } = useFetchData(productURL);

  const updateProductHandler = async (event) => {
    event.preventDefault();
    const updatedProductData = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };
    //  updateHandler(updatedProductData);
  };

  // console.log("formData", formData);

  /*   const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }; */

  return (
    <div className="updateProjectPage">
      <Typography variant="h4" gutterBottom>
        Update Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <form onSubmit={updateProductHandler}>
            <InputField
              label="title"
              id="title"
              name="title"
              type="text"
              //  value={formData.title}
              // onChange={(e) => setFormData({ title: e.target.value })}
            />
            <InputMultiline
              label="description"
              type="text"
              //  value={formData.description}
              // onChange={(e) => setFormData({ description: e.target.value })}
            />
            <InputField
              label="price"
              id="price"
              name="price"
              type="text"
              //  value={formData.price}
              //  onChange={(e) => setFormData({ price: e.target.value })}
            />
            <InputField
              label="count"
              id="count"
              name="count"
              type="text"
              // value={formData.count}
              //  onChange={(e) => setFormData({ count: e.target.value })}
            />
            <InputField
              label="rating"
              id="rating"
              name="rating"
              type="text"
              //  value={formData.rating}
              //  onChange={(e) => setFormData({ rating: e.target.value })}
            />
            <InputSelect
              label="category"
              name="category"
              //  value={formData.category}
              //  onChange={(e) => setFormData({ category: e.target.value })}
            />
            <ButtonComponent
              label="Update Product"
              onClick={updateProductHandler}
              type="button"
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <img src={UpdateProductImg} alt="Update Product" />
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProduct;
