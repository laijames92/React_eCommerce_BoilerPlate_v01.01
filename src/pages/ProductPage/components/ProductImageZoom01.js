//props.slideIndex default: "0"

import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";
import ReactImageMagnify from "react-image-magnify";

const useStyles = makeStyles((theme) => ({
  slider: {
    background: "lightgrey",
    // height: "inherit",
    minHeight: "40vh",
    maxHeight: "40vh",
    overflow: "hidden", //crop image overflow out from container
    backgroundSize: "contain",
    margin: "auto", //align slider horizontally
    justifyContent: "center", //align image horizontally
    textAlign: "center", //align image horizontally
    display: "flex", //enables align image vertically
    alignItems: "center", //align image vertically
    fontSize: "15px",
    padding: "auto"
  }
}));

const ProductImageZoom01 = (props) => {
  const classes = useStyles();

  const { slideIndex } = { slideIndex: "0", ...props };
  const slider = React.useRef();

  const settings = {
    speed: 0,
    fade: false,
    arrows: false,
    swipeToSlide: false,
    slidesToShow: 1,
    adaptiveHeight: true //centers image in fixed width/height container
  };

  React.useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  return (
    <React.Fragment>
      <div
        style={{
          background: "red"
        }}
      >
        <Slider {...settings} ref={slider} className={classes.slider}>
          {props.seller.product.img.map((x) => (
            <ReactImageMagnify
              {...{
                smallImage: {
                  src: x,
                  width: 400,
                  height: 400,
                  isFluidWidth: true
                },
                largeImage: {
                  src: x,
                  width: 600,
                  height: 600
                },
                enlargedImagePosition: "over",
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
              }}
            />
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default ProductImageZoom01;
