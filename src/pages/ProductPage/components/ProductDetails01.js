import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh"
  },
  productName: {
    background: "#fafafa",
    fontSize: "16px",
    fontWeight: "600"
  }
}));

const ProductDetails01 = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.container}>
        <CardHeader
          title={props.seller.product.name}
          className={classes.productName}
        />

        <CardContent>
          <Typography>{props.seller.product.description}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ProductDetails01;
