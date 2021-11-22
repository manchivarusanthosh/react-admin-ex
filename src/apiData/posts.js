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
import Icon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

export const VisitorIcon = Icon;

const useStyles = makeStyles({
  table: {
    backgroundColor: "#fffff",
  },
  headerCell: {
    backgroundColor: "#fffff",
  },
});

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);

export const PostList = ({ ...props }) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid classes={classes} {...props}>
        <TextField source="userId" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
