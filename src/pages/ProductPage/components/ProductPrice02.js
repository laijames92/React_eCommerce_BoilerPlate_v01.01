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
    fontSize: "1rem",
    color: "#929292",
    marginRight: "10px",
    textDecoration: "line-through"
  },
  salePrice: {
    fontSize: "1.875rem",
    color: "#ee4d2d"
  },
  discount: {
    fontSize: ".75rem",
    fontWeight: "600",
    color: "#fff",
    background: "#ee4d2d",
    marginLeft: "15px",
    borderRadius: "2px",
    padding: "4px 4px",
    textTransform: "uppercase"
  }
}));

const ProductPrice02 = (props) => {
  const classes = useStyles();
  // const [rating, setRating] = React.useState({
  //   rating: props.rating,
  //   counter: 0
  // });

  return (
    <React.Fragment>
      <Box className={classes.container}>
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
          className={classes.salePrice}
        >
          RM{props.salePrice}
        </Typography>
        <Typography
          variant="body1 overline"
          color="textSecondary"
          component="p"
          display="inline"
          className={classes.discount}
        >
          {Math.ceil(
            ((props.normalPrice - props.salePrice) / props.normalPrice) * 100
          )}
          % OFF
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default ProductPrice02;
