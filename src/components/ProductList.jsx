import Product from "./Products";
import { Grid, Typography } from "@mui/material";
import useFetchData from "../hooks/useFetchData";
import { productURL } from "../api/api";
import LoadingImg from "../assets/images/loading.gif";
import ModalDialog from "./UI/ModalDialog";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const { data, isLoading, error, setData } = useFetchData(productURL);

  if (isLoading)
    return (
      <div className="loading">
        <img src={LoadingImg} alt="loading" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  const productDeleteHandler = async (productId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      setData(data.filter((product) => product.id !== productId));
      console.log("proId", data);
    } catch (error) {
      console.log("Falied to delete product", error);
    }
  };
  return (
    <div className="product-list">
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {data.map((product) => {
          return (
            <Grid item xs={3} key={product.id}>
              <Product
                {...product}
                deleteHandler={() => productDeleteHandler(product.id)}
              />
            </Grid>
          );
        })}

        {/*  <ModalDialog>
          <ProductDetails />f asdf asdfads fadsf sdf sdf asdfadsf asdfsd
        </ModalDialog> */}
      </Grid>
    </div>
  );
};

export default ProductList;
