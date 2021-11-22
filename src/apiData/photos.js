import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  TextInput,
  SimpleForm,
  Edit,
  Create,
} from "react-admin";
import Icon from "@material-ui/icons/Person";

export const VisitorIcon = Icon;

export const PhotoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="albumId" />
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="url" />
      <TextInput source="thumbnailUrl" />
    </SimpleForm>
  </Create>
);

export const PhotosEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="albumId" />
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="url" />
      <TextInput source="thumbnailUrl" />
    </SimpleForm>
  </Edit>
);

export const photos = (props) => {
  return (
    <List {...props}>
      <Datagrid {...props}>
        <TextField source="albumId" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="thumbnailUrl" />
      </Datagrid>
    </List>
  );
};

export default photos;
