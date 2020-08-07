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
    display: "flex"
  },
  rating: {
    marginLeft: "",
    padding: "0px 10px 0px 10px",
    color: "#ee4d2d"
  },
  ratingText: {
    color: "#ee4d2d",
    textDecoration: "underline",
    fontSize: ".85rem",
    fontWeight: "600"
  },
  counter: {
    padding: "0px 10px"
  },
  divider: {}
}));

const ProductRatingCounter02 = (props) => {
  const classes = useStyles();
  const { rating, ratingCounter, saleCounter } = {
    rating: 0,
    ratingCounter: 0,
    saleCounter: 0,
    ...props
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid xs={12}>
          <Box className={classes.container}>
            <Typography
              display="inline"
              variant="body1"
              className={classes.ratingText}
            >
              {rating}
            </Typography>
            <Rating
              name="simple-controlled"
              size="small"
              value={props.rating}
              readOnly
              className={classes.rating}
            />
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
              {ratingCounter} Ratings
            </Typography>
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
              {saleCounter} Sold
            </Typography>
          </Box>
        </Grid>
        {/* <Hidden smUp>
          <Grid xs={12}>
            <Box className={classes.container}>
              <Typography
                display="inline"
                variant="body2"
                className={classes.counter}
              >
                {props.counter} sold
              </Typography>
            </Box>
          </Grid>
        </Hidden> */}
      </Grid>
    </React.Fragment>
  );
};

export default ProductRatingCounter02;
