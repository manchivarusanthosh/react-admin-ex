import * as React from "react";
import { AppBar } from "react-admin";
import Hidden from "@material-ui/core/Hidden";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import Logo from "./Logo.png";
import MyNotification from "./MyNotification";

import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
  logoimage: {
    height: theme.spacing(6),
  },
  appBarColor: {
    backgroundColor: "#746be7",
    height: 50,
    color: "white",
  },
  logoText: {
    fontWeight: "bold",
  },
}));

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} className={classes.appBarColor}>
      <Toolbar>
        <Typography variant="h6" id="react-admin-title" />
      </Toolbar>
      <Typography
        variant="h6"
        color="secondary"
        className={classes.title}
        id="react-admin-title"
      />
      {/* <img alt="logo" src={Logo} className={classes.logoimage} /> */}
      <Hidden only={["xs"]}>
        <h3 className="logoText"> Software Solutions</h3>
      </Hidden>

      <span className={classes.spacer} />
      <MyNotification />
    </AppBar>
  );
};

export default MyAppBar;
