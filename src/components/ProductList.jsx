import { useEffect, useState } from "react";
import Product from "./Products";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import useFetchData from "../hooks/useFetchData";
import {productURL} from "../api/api";
import LoadingImg from "../assets/images/loading.gif";

const ProductList = () => {
  const {data, isLoading, error} = useFetchData(productURL);

  if(isLoading) return <div className="loading"><img src={LoadingImg} alt="loading" /></div>
  if(error) return <div>Error: {error.message}</div>
  if(!data) return null;

  return (
    <div className="product-list">
       <Typography variant="h4" gutterBottom>Product List</Typography>
      <Grid container spacing={3}>
        {data.map((product) => {
          return (
            <Grid item xs={3} key={product.id} >            
                <Product {...product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductList;
