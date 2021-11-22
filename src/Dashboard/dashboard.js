import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Welcome from "./Welcome";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com/users"
);
console.log("Data Provider", dataProvider.getData);

const useStyles = makeStyles((theme) => ({
  individualContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
}));

export default function Dashboard() {
  const [postData, setPostData] = useState(0);
  const [todos, setTodos] = useState(0);
  const [usersData, setUsersData] = useState(0);
  const [photosData, setPhotosData] = useState(0);
  const [commentsData, setCommentsData] = useState(0);

  async function getData(fetchingParam) {
    const response = await fetch(
      //eslint-disable-next-line
      "https://jsonplaceholder.typicode.com/" + `${fetchingParam}`
    );
    const data = await response.json();

    switch (fetchingParam) {
      case "posts":
        setPostData(data.length);
        break;
      case "users":
        setUsersData(data.length);
        break;
      case "todos":
        setTodos(data.length);
        break;
      case "photos":
        setPhotosData(data.length);
        break;
      case "comments":
        setCommentsData(data.length);
        break;
      default:
        return;
    }
  }

  const urlParams = ["posts", "photos", "users", "todos", "comments"];

  urlParams.map((param) => {
    return getData(param);
  });

  const classes = useStyles();
  return (
    <div>
      {/* Welcome card is rendered here */}
      <Welcome />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 350,
            height: 150,
            flexGrow: 1,
          },
        }}
      >
        <Paper elevation={3} className={classes.individualContainer}>
          User's : {usersData}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Posts : {postData}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Comments : {commentsData}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Todo's : {todos}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Photos : {photosData}
        </Paper>
      </Box>
    </div>
  );
}
