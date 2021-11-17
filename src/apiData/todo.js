import * as React from "react";
import { Datagrid, EditButton, List, TextField, ShowButton } from "react-admin";
import Icon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

export const VisitorIcon = Icon;

const useStyles = makeStyles({
  table: {
    backgroundColor: "Lavender",
  },
  headerCell: {
    backgroundColor: "#ffffff",
  },
});

export const TodoList = (props) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid classes={classes} {...props}>
        <TextField source="userId" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="completed" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default TodoList;
