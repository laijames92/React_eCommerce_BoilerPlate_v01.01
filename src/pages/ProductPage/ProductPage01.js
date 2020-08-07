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

const useStyles = makeStyles((theme) => ({}));

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
        <Card>
          <Grid container spacing={2}>
            <Grid item md={4} sm={5} xs={12}>
              <ProductImageZoom01 {...props} slideIndex={slideIndex} />
              <ProductImageThumbnailXs01 {...props} onClick={setSlideIndex} />
            </Grid>

            <Grid item md={8} sm={7} xs={12}>
              <ProductSummary01 {...props} />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ProductPage01;
