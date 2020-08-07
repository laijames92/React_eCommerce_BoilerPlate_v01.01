import React, { useState } from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  quantity: {
    display: "inline-flex",
    width: "110px",
    color: "#757575",
    padding: "10px 0px 0px 0px"
  },
  button: {
    width: "32px",
    height: "32px",
    color: "rgba(0,0,0,.8)",
    background: "transparent",
    border: "1px solid rgba(0,0,0,.09)",
    cursor: "pointer"
  },
  quantityCounter: {
    width: "50px",
    height: "32px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "400",
    background: "transparent",
    border: "1px solid rgba(0,0,0,.09)",
    cursor: "text"
  }
}));

const ProductQuantityCounter01 = (props) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState(0);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  function counter(e) {
    if (e.target.name === "-" && inputValue > 0) {
      setIsInfoVisible(false);
      setInputValue(inputValue - 1);
    } else if (e.target.name === "-" && inputValue <= 0) {
      return null;
    } else if (e.target.name === "+") {
      setIsInfoVisible(false);
      setInputValue(inputValue + 1);
    }
  }

  return (
    <Box>
      <Typography variant="body2" display="inline" className={classes.quantity}>
        Quantity
      </Typography>

      <button
        type="button"
        value="-"
        name="-"
        onClick={counter}
        className={classes.button}
      >
        {" "}
        -{" "}
      </button>
      <input
        className={classes.quantityCounter}
        type="text"
        value={inputValue}
        size="1"
        readOnly
      />
      <button
        type="button"
        value="+"
        name="+"
        onClick={counter}
        className={classes.button}
      >
        {" "}
        +{" "}
      </button>
    </Box>
  );
};

export default ProductQuantityCounter01;
