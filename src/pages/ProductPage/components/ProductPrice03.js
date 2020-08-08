import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fafafa",
    padding: "15px 20px",
    alignItems: "center",
    display: "flex"
  },
  normalPrice: {
    fontSize: "10px",
    color: "#9e9e9e",
    marginRight: "5px",
    textDecoration: "line-through"
  },
  salePrice: {
    fontSize: "18px",
    color: "#ee4d2d"
  },
  discount: {
    fontSize: "10px",
    fontWeight: "600",
    color: "#9e9e9e",
    // background: "#ee4d2d",
    borderRadius: "2px",
    padding: "4px 4px",
    textTransform: "uppercase"
  }
}));

const ProductPrice03 = (props) => {
  const classes = useStyles();
  // const [rating, setRating] = React.useState({
  //   rating: props.rating,
  //   counter: 0
  // });

  return (
    <React.Fragment>
      <Typography
        variant="body1 overline"
        color="textSecondary"
        component="p"
        // display="inline"
        className={classes.salePrice}
      >
        RM{props.salePrice}
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        display="inline"
        className={classes.normalPrice}
      >
        RM{props.normalPrice}
      </Typography>

      <Typography
        variant="body1 overline"
        color="textSecondary"
        component="p"
        display="inline"
        className={classes.discount}
      >
        -
        {Math.ceil(
          ((props.normalPrice - props.salePrice) / props.normalPrice) * 100
        )}
        %
      </Typography>
    </React.Fragment>
  );
};

export default ProductPrice03;
