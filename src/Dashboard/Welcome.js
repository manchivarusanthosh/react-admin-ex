import * as React from "react";
import { Box, Card, CardActions, Button, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles } from "@material-ui/core/styles";

import publishArticleImage from "./welcome_illustration.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      theme.palette.type === "dark"
        ? "#535353"
        : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

    color: "#fff",
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: "1em",
  },
  media: {
    background: `url(${publishArticleImage}) top right / cover`,
    marginLeft: "auto",
  },
  actions: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
      flexWrap: "wrap",
      "& a": {
        marginTop: "1em",
        marginLeft: "0!important",
        marginRight: "1em",
      },
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to the Simple Dashboard!!!
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              Find all the details of the Project.
            </Typography>
          </Box>
          <CardActions className={classes.actions}>
            <Button
              variant="contained"
              href="https://github.com/manchivarusanthosh/"
              startIcon={<HomeIcon />}
            >
              My Git Home
            </Button>
            <Button
              variant="contained"
              href="https://github.com/manchivarusanthosh/react-admin-ex.git"
              startIcon={<CodeIcon />}
            >
              Project Source Code
            </Button>
          </CardActions>
        </Box>

        <Box
          display={{ xs: "none", sm: "none", md: "block" }}
          className={classes.media}
          width="16em"
          height="9em"
          overflow="hidden"
        />
      </Box>
    </Card>
  );
};

export default Welcome;
