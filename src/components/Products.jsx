import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { use, useContext } from "react";
import { OpenDialogContext } from "../store/ModalDialogContextProvider";
import Button from "@mui/material/Button";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const { handleClickOpen } = useContext(OpenDialogContext);
  return (
    <div className="product">
      <Link to={`${id}`} /*  onClick={handleClickOpen} */>
        <Card>
          <CardActionArea>
            <Box className="cardMediaWrapper">
              <CardMedia component="img" image={image} alt={title} />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                {title}
              </Typography>

              <Typography variant="h4" gutterBottom className="price">
                <span className="amount">${price}</span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="description"
              >
                {description}
              </Typography>
              <Typography variant="body1" gutterBottom className="category">
                Category: <span>{category}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className="card-footer">
            <span>Count: {rating.count}</span>
            <span>Rating: {rating.rate}</span>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
};

export default Product;
