import React from "react";
import { Tab, makeStyles } from "@material-ui/core";

import { TabList, TabContext, TabPanel } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  // indicator: {
  //   backgroundColor: "cyan",
  //   height: "10px",
  //   top: "45px"
  // },
  flexContainer: {
    height: "60px",
    background: "transparent"
  }
  // selected1: {
  //   background: "red",
  //   color: "white"
  // },
  // selected2: {
  //   background: "maroon",
  //   color: "white"
  // },
  // selected3: {
  //   background: "purple",
  //   color: "white"
  // }
}));

const ProductDetails03tabs = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator
          }}
        >
          <Tab
            classes={{
              selected: classes.selected1
            }}
            label="Description"
            value={0}
          />
          <Tab
            classes={{
              selected: classes.selected2
            }}
            label="Specification"
            value={1}
          />
          <Tab
            classes={{
              selected: classes.selected3
            }}
            label="Item Three"
            value={2}
          />
        </TabList>
        <TabPanel value={0}>{props.seller.product.description}</TabPanel>
        <TabPanel value={1}>Specification</TabPanel>
        <TabPanel value={2}>Item Three</TabPanel>
      </TabContext>
    </div>
  );
};

export default ProductDetails03tabs;
