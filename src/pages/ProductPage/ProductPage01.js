import React, { useState } from "react";
import {
  Card,
  Typography,
  makeStyles,
  Grid,
  Container
} from "@material-ui/core";
import ProductSummary01 from "./components/ProductSummary01";
import ProductImageZoom01 from "./components/ProductImageZoom01";
import ProductImageThumbnailXs01 from "./components/ProductImageThumbnailXs01";
import CustomHero01 from "../shared/components/CustomHero01";
import ProductDetails01 from "./components/ProductDetails01";
import ProductDetails02accordion from "./components/ProductDetails02accordion";
import ProductDetails03tabs from "./components/ProductDetails03tabs";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px 0px",
    padding: "20px"
  }
}));

const ProductPage01 = (props) => {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <React.Fragment>
      <CustomHero01
        minHeight="40vh"
        backgroundImage={props.seller.product.img[0]}
      />
      <Container maxWidth="lg">
        <Card className={classes.container}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ProductImageZoom01 {...props} slideIndex={slideIndex} />
              <ProductImageThumbnailXs01 {...props} onClick={setSlideIndex} />
            </Grid>

            <Grid item md={8} sm={6} xs={12}>
              <ProductSummary01 {...props} />
            </Grid>
          </Grid>
        </Card>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <ProductDetails01 {...props} /> */}
              <ProductDetails02accordion {...props} />

              <ProductDetails03tabs {...props} />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ProductPage01;
