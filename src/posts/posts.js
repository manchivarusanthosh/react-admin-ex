import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
} from "react-admin";

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

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

const PostList = (props) => {
  return (
    <List {...props} filters={postFilters}>
      <Datagrid rowClick="edit">
        <ReferenceField
          source="userId"
          reference="users"
          label="Name of the User"
        >
          {/* <TextField source="id" /> */}
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
