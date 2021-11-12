import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Edit>
);

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <MyUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};

export default UserList;
