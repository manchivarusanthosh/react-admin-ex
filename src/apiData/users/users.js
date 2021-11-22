import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
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

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" label="Id" />
      <TextInput source="username" label="User Name" />
      <TextInput source="email" label="Email" />
      <TextInput source="phone" label="Phone" />
      <TextInput source="website" label="Website" />
      <TextInput source="company.name" label="Company Name" />
    </SimpleForm>
  </Create>
);

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" label="Id" />
        <TextField source="username" label="User Name" />
        <EmailField source="email" label="Email" />
        <TextField source="phone" label="Phone" />
        <MyUrlField source="website" label="Website" />
        <TextField source="company.name" label="Company Name" />
      </Datagrid>
    </List>
  );
};

export default UserList;
