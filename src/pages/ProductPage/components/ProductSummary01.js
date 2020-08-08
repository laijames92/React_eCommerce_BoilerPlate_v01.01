import React from "react";
import {
  Card,
  Typography,
  makeStyles,
  Grid,
  Divider,
  Box
} from "@material-ui/core";
import ProductRatingCounter02 from "./ProductRatingCounter02";
import ProductPrice02 from "./ProductPrice02";
import ProductQuantityCounter01 from "./ProductQuantityCounter01";
import ProductPurchase01 from "./ProductPurchase01";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "550",
    fontSize: "1.25rem",
    padding: "10px 0px 0px 0px"
  },
  addToCartButton: {
    background: "rgba(255,87,34,.1)",
    border: "1px solid #ee4d2d",
    color: "#ee4d2d",
    marginRight: "15px",
    minWidth: "11.25rem",
    height: "48px",
    padding: "0 .75rem",
    "&:hover": {
      background: "rgba(255,87,34,.15)"
    }
  },
  buyNowButton: {
    color: "#fff",
    background: "#ee4d2d",
    minWidth: "11.25rem",
    height: "48px",
    padding: "0 .75rem",
    "&:hover": {
      background: "#f05d40"
    }
  }
}));

const ProductSummary01 = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.title}>
              {props.seller.product.name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ProductRatingCounter02
              rating={props.seller.product.rating}
              ratingCounter={props.seller.product.ratingCounter}
              saleCounter={props.seller.product.saleCounter}
            />
          </Grid>

          <Grid item xs={12}>
            <ProductPrice02
              normalPrice={props.seller.product.price.normalPrice}
              salePrice={props.seller.product.price.salePrice}
            />
          </Grid>

          <Grid item xs={12}>
            <ProductQuantityCounter01 />
          </Grid>

          <Grid item xs={12}>
            <ProductPurchase01 />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ProductSummary01;
