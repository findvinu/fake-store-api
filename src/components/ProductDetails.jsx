import { productURL } from "../api/api";
import useFetchData from "../hooks/useFetchData";
import LoadingImg from "../assets/images/loading.gif";
import { useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const { id } = useParams();
  const apiUrl = `${productURL}/${id}`;
  const { data, isLoading, error } = useFetchData(apiUrl);

  if (isLoading)
    return (
      <div className="loading">
        <img src={LoadingImg} alt="loading" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  console.log("product details", data);

  return (
    <div className="product-details">
      <Card
        sx={{ display: "flex" }}
        key={data.id}
        className="product-details-inner"
      >
        <CardMedia component="img" image={data.image} alt={data.title} />
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
          className="content-wrapper"
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="h3" variant="h3" className="heading3">
              {data.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              {data.category}
            </Typography>
            <Typography variant="h2" component="h2" className="heading2">
              ${data.price}
            </Typography>
            <Typography variant="h5" component="div" className="heading5">
              {data.description}
            </Typography>
            <Box sx={{ display: "flex" }} className="footer-wrapper">
              <Typography variant="h5" component="div">
                Count: {data.rating.count}
              </Typography>
              <Typography variant="h5" component="div">
                Rating: {data.rating.rate}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default ProductDetails;
