import * as React from "react";
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  ShowButton,
  TextInput,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Edit,
} from "react-admin";

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);

export const CommentList = ({ ...props }) => {
  return (
    <List {...props}>
      <Datagrid {...props}>
        <TextField source="postId" />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default CommentList;
