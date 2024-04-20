import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, Typography } from "@mui/material";

const Product = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="product">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            
            <Typography variant="h4" gutterBottom className="price">
            <span className="amount">${price}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
    </div>
  );
};

export default Product;
