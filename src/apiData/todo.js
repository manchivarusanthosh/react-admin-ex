import * as React from "react";
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  ShowButton,
  TextInput,
  BooleanInput,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  BooleanField,
  Edit,
} from "react-admin";
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

export const TodoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" label="User Id">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" label="Todo Id" />
      <TextInput source="title" />
      <BooleanInput source="completed" />
    </SimpleForm>
  </Create>
);

export const TodoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" label="User Id">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" label="Todo Id" />
      <TextInput source="title" />
      <BooleanInput source="completed" />
    </SimpleForm>
  </Edit>
);

export const TodoList = (props) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid classes={classes} {...props}>
        <TextField source="userId" />
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="completed" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default TodoList;
