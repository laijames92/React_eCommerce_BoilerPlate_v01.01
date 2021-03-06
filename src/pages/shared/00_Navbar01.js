import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";

import ScrollToSlide01 from "./components/ScrollToSlide01";
import ScrollToColor01 from "./components/ScrollToColor01";
import NavLinks from "./data/NavLinks";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  brand: {
    flexGrow: "1"
  }
}));

const Navbar01 = () => {
  const classes = useStyles();

  return (
    <ScrollToColor01
      threshold={70}
      bgColorBefore={"transparent"}
      bgColorAfter={"white"}
      textColorBefore={"white"}
      textColorAfter={"#0078ff"}
      fadeIn={"0.3s"}
      fadeOut={"0.3s"}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" noWrap className={classes.brand}>
            {`React e-Commerce BoilerPlate`}
          </Typography>

          {NavLinks.map((NavLink) => (
            <Button color="inherit" component={Link} to={NavLink.page}>
              {NavLink.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </ScrollToColor01>
  );
};

export default Navbar01;
