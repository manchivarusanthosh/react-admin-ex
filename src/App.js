import * as React from "react";
// import { createMuiTheme } from "@material-ui/core/styles";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserList, { UserEdit } from "./users/users";
import PostList, { PostCreate, PostEdit } from "./posts/posts";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import Dashboard from "./Dashboard/dashboard";
import authProvider from "./Authentication/authProvider";

// const theme = createMuiTheme({
//   palette: {
//     type: "dark", // Switching the dark mode on is a single property value change.
//   },
// });

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);

export default App;
