import React, { Fragment } from "react";
import {
  Card,
  Typography,
  Grid,
  Avatar,
  makeStyles,
  CardMedia,
  Divider,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    // width: "440px",
    padding: "20px"
    // display: "flex"
  },
  avatar: {
    // width: theme.spacing(9),
    // height: theme.spacing(9)
    width: "80px",
    height: "80px",
    marginRight: "1.25rem"
    // display: "flex",
    // position: "relative"
  },
  divider: {
    background: "red",
    // width: "1px",
    height: "10px"
  }
}));

const ProductSeller01 = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.container}>
        <Grid container>
          <Grid item xs={4}>
            {/* <div style={{background: "red", width: "440px", display: "flex"}}> */}
            <Box style={{ background: "red", width: "440px", display: "flex" }}>
              <CardMedia
                key={props.index}
                src={props.seller.img[0]}
                title={props.seller.name}
                component="img"
                alt="alt"
                className={classes.avatar}
              />

              <Typography display="block">{props.seller.name}</Typography>
              <Divider
                orientation="vertical"
                variant=""
                flexItem
                className={classes.divider}
              />
            </Box>
            {/* </div> */}
          </Grid>
        </Grid>
      </Card>
    </Fragment>
  );
};

export default ProductSeller01;
