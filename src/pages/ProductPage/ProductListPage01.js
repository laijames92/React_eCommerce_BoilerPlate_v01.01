import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Data from "../shared/data/Data";
// import ProductRatingCounter01 from "../shared/components/ProductRatingCounter01";
import ProductPrice01 from "./components/ProductPrice01";
import ProductPrice02 from "./components/ProductPrice02";
import ProductRatingCounter01 from "./components/ProductRatingCounter01";
import ProductRatingCounter02 from "./components/ProductRatingCounter02";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width: "100%",
    margin: "0px"
  },
  mediaContainer: {
    background: "darkgrey",
    display: "flex", //enables align image vertically
    alignItems: "center", //align image vertically
    justifyContent: "center", //align image horizontally
    padding: "auto",
    margin: "auto 0px"
  },
  media: {
    width: "250px",
    display: "flex", //enables align image vertically
    minHeight: "140px",
    backgroundSize: "contain"
  },
  productName: {
    fontSize: "1.rem"
  },
  card: {
    "&:hover": {
      transition: "all 100ms ease",
      // boxShadow: "0 0 0 5px #0078ff",
      border: "3px solid #ee4d2d",
      left: ".0625rem",
      top: "-webkit-calc(100% - .125rem)",
      borderRadius: "1.125rem",
      borderBottomRightRadius: ".125rem"
    }
  }
}));

const product = [
  { category: "video engineer" },
  { category: "event manager" },
  { category: "visual artist" },
  { category: "culinary artist" },
  { category: "emcee" }
];

const ProductListPage01 = () => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [filteredState, setFilteredState] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setState([...state, e.target.value]);
    } else {
      setState(state.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (state.length === 0) {
      setFilteredState(Data);
    } else {
      setFilteredState(
        Data.filter((data) =>
          state.some((category) =>
            [data.seller.product.category].flat().includes(category)
          )
        )
      );
    }
  }, [state]);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <TextField value={state} fullWidth onChange={handleChange} /> */}
          <FormControl>
            <FormGroup>
              {product.map((data) => (
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} />}
                  label={data.category}
                  value={data.category}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>

        {filteredState.map((xxx, index) => (
          <Grid item xl={1} md={2} sm={4} xs={12}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={`/product/${index}`}>
                <Grid container spacing={0}>
                  <Grid item sm={12} xs={5}>
                    <div className={classes.mediaContainer}>
                      <CardMedia
                        className={classes.media}
                        image={xxx.seller.product.img[0]}
                        title={xxx.seller.product.name}
                      />
                    </div>
                  </Grid>

                  <Grid item sm={12} xs={7}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        noWrap
                        className={classes.productName}
                      >
                        {xxx.seller.product.name}
                      </Typography>

                      <Box>
                        <ProductPrice01
                          normalPrice={xxx.seller.product.price.normalPrice}
                          salePrice={xxx.seller.product.price.salePrice}
                        />
                      </Box>

                      <ProductRatingCounter01
                        rating={xxx.seller.product.rating}
                        ratingCounter={xxx.seller.product.ratingCounter}
                        saleCounter={xxx.seller.product.saleCounter}
                      />
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ProductListPage01;
