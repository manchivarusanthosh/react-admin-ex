import * as React from "react";
import { Datagrid, List, TextField } from "react-admin";
import Icon from "@material-ui/icons/Person";

export const VisitorIcon = Icon;

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
