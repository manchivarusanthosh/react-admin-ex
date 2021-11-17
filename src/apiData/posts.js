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
    backgroundColor: "#b9bdc9",
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

// const postFilters = [
//   <TextInput source="q" label="Search" alwaysOn />,
//   <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
//     <SelectInput optionText="name" />
//   </ReferenceInput>,
// ];

// const ColoredNumberField = (props) => {
//   const classes = useStyles();
//   return (
//     <NumberField
//       className={classnames({
//         [classes.small]: props.record[props.source] < 100,
//         [classes.big]: props.record[props.source] >= 100,
//       })}
//       {...props}
//     />
//   );
// };

// ColoredNumberField.defaultProps = NumberField.defaultProps;

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
