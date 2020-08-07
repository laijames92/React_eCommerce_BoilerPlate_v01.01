import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

const Section01 = () => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        style={{ padding: "10px", background: "cyan", borderStyle: "solid" }}
      >
        <Grid
          item
          xs={12}
          style={{ background: "lightblue", borderStyle: "solid" }}
        >
          <Typography variant="h4" noWrap align="center" color="initial">
            {`Col xs={12}`}
          </Typography>
          <Divider orientation="horizontal" variant="fullWidth" />
          <Typography variant="subtitle2" align="justify">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas. Raised and
            borned in Kuching, Sarawak, Borneo. A Junior React programmer
          </Typography>
          {/* </Paper> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          style={{ background: "lightblue", borderStyle: "solid" }}
        >
          {/* <Paper className={classes.paper}> */}
          <Typography variant="h4" align="center" color="initial">
            {`Col sm={4} xs={12}`}
          </Typography>
          {/* </Paper> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          style={{ background: "lightblue", borderStyle: "solid" }}
        >
          <Typography variant="h4" align="left" color="initial">
            {`Col sm={8} xs={12}`}
          </Typography>

          <Typography variant="subtitle2" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Typography variant="subtitle2" align="left">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Section01;
