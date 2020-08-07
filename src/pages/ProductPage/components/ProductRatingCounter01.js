import React from "react";
import { Rating } from "@material-ui/lab";
import {
  makeStyles,
  Typography,
  Grid,
  Hidden,
  Box,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    // background: "red",
    float: "right",
    alignItems: "right",
    justifyContent: "right",
    textAlign: "right"
  },
  rating: {
    marginLeft: "auto",
    marginRight: "0px",
    float: "right",
    alignItems: "right",
    justifyContent: "right",
    textAlign: "right",
    padding: "0px 10px"
  },
  counter: {
    marginLeft: "auto",
    // background: "green",
    padding: "0px 10px"
  },
  divider: {
    backgroundColor: "#ee4d2d"
  }
}));

const ProductRatingCounter01 = (props) => {
  const classes = useStyles();
  const { saleCounter } = { saleCounter: 0, ...props };

  // const [rating, setRating] = React.useState({
  //   rating: props.rating,
  //   counter: 0
  // });

  return (
    <React.Fragment>
      <Grid container>
        <Grid xs={12}>
          <Box className={classes.container}>
            <Rating
              name="simple-controlled"
              size="small"
              value={props.rating}
              readOnly
              className={classes.rating}
            />
            <Hidden xsDown>
              <Divider
                orientation="vertical"
                variant=""
                flexItem
                className={classes.divider}
              />

              <Typography
                display="inline"
                variant="body2"
                className={classes.counter}
              >
                {saleCounter} sold
              </Typography>
            </Hidden>
          </Box>
        </Grid>
        <Hidden smUp>
          <Grid xs={12}>
            <Box className={classes.container}>
              <Typography
                display="inline"
                variant="body2"
                className={classes.counter}
              >
                {props.saleCounter} sold
              </Typography>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
};

export default ProductRatingCounter01;
