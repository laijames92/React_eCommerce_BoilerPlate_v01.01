import React from "react";
import Slider from "react-slick";
import {
  CardMedia,
  Card,
  makeStyles,
  Grid,
  Container,
  Hidden
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slider: {
    // background: "red",
    marginTop: "10px",
    margin: "auto", //align slider horizontally
    // display: "block", //enables align image vertically but causes thumbnails to shrink when less than specified image is shown
    textAlign: "center", //align image horizontally
    justifyContent: "center", //align image horizontally
    alignItems: "center", //align image vertically
    height: "86px"
  },
  card: {
    width: "45px",
    boxShadow: "0 0 0 3px #cde1f8",
    "&:hover": {
      transition: "all 100ms ease",
      boxShadow: "0 0 0 3px #0078ff",
      opacity: "0.7"
    }
  },
  thumbnailMobile: {
    height: "80px"
  }
}));

const ProductImageThumbnailXs01 = (props) => {
  const classes = useStyles();

  const settingsThumbnail = {
    focusOnSelect: true,
    speed: 300,
    arrows: true,
    infinite: false,
    // adaptiveHeight: true

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5
          // slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1412,
        settings: {
          slidesToShow: 4
          // slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
          // slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Slider {...settingsThumbnail} className={classes.slider}>
        {props.seller.product.img.map((x, index) => (
          <Card className={classes.card}>
            <CardMedia
              key={index}
              image={x}
              title={index}
              component="img"
              alt="alt"
              onClick={() => props.onClick(index)}
              onMouseOver={() => props.onClick(index)}
              className={classes.thumbnailMobile}

              // classes={{ img: classes.thumbnail }}
            />
          </Card>
        ))}
      </Slider>
    </React.Fragment>
  );
};

export default ProductImageThumbnailXs01;
