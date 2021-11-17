import * as React from "react";
// import { createMuiTheme } from "@material-ui/core/styles";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserList, { UserEdit } from "./users/users";
import PostList, { PostCreate, PostEdit } from "./apiData/posts";
import TodoList from "./apiData/todo";
import photos from "./apiData/photos";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import Dashboard from "./Dashboard/dashboard";
import authProvider from "./Authentication/authProvider";
import MyLogoutButton from "./Logout/MyLogoutButton";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    logoutButton={MyLogoutButton}
  >
    <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
    <Resource name="photos" list={photos} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="todos" list={TodoList} />
  </Admin>
);

export default App;
