import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Welcome from "./Welcome";

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

  async function getData(fetchingParam) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/" + `${fetchingParam}`
    );
    const data = await response.json();
    console.log("data lenght", data.length);
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
      default:
        return;
    }
  }

  const urlParams = ["posts", "photos", "users", "todos"];

  urlParams.map((param) => {
    return getData(param);
  });

  const classes = useStyles();
  return (
    <div>
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
          Todo's : {todos}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Posts : {postData}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          Photos : {photosData}
        </Paper>
        <Paper elevation={3} className={classes.individualContainer}>
          User's Count : {usersData}
        </Paper>
      </Box>
    </div>
  );
}
