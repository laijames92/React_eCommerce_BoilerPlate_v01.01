import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#f3f6f9"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  productName: {
    background: "#fafafa",
    fontSize: "16px",
    fontWeight: "600"
  }
}));

const ProductDetails02accordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Fragment>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.seller.product.description}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default ProductDetails02accordion;
