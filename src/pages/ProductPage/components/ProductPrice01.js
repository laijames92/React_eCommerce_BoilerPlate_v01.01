import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  normalPrice: {
    fontSize: "0.75rem",
    textDecoration: "line-through"
  },
  rm: {
    fontSize: "0.75rem",
    color: "#ee4d2d"
  },
  salePrice: {
    fontSize: "1rem",
    color: "#ee4d2d"
  }
}));

const ProductPrice01 = (props) => {
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
        display="inline"
        className={classes.rm}
      >
        RM
      </Typography>
      <Typography
        variant="body1 overline"
        color="textSecondary"
        component="p"
        display="inline"
        className={classes.salePrice}
      >
        {props.salePrice}
      </Typography>
      {` `}
      <Typography
        variant="body1"
        color="textSecondary"
        display="inline"
        className={classes.normalPrice}
      >
        RM{props.normalPrice}
      </Typography>
    </React.Fragment>
  );
};

export default ProductPrice01;
