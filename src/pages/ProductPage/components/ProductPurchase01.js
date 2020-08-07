import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { MdAddShoppingCart } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
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

const ProductPurchase01 = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        startIcon={<MdAddShoppingCart />}
        className={classes.addToCartButton}
      >
        Add To Cart
      </Button>
      <Button variant="contained" className={classes.buyNowButton}>
        BUY NOW
      </Button>
    </React.Fragment>
  );
};

export default ProductPurchase01;
