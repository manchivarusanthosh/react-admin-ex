import * as React from "react";
// import { createMuiTheme } from "@material-ui/core/styles";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserList, { UserCreate, UserEdit } from "./apiData/users/users";
import PostList, { PostCreate, PostEdit } from "./apiData/posts";
import TodoList, { TodoCreate, TodoEdit } from "./apiData/todo";
import photos, { PhotoCreate, PhotosEdit } from "./apiData/photos";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import ImageIcon from "@material-ui/icons/Image";
import TodoIcon from "@material-ui/icons/Work";
import CommentIcon from "@material-ui/icons/Comment";

import Dashboard from "./Dashboard/dashboard";
import authProvider from "./Authentication/authProvider";
import MyLogoutButton from "./Logout/MyLogoutButton";
import MyLayout from "./MyLayout/MyLayout";
import CommentList, { CommentCreate, CommentEdit } from "./apiData/comments";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    logoutButton={MyLogoutButton}
    layout={MyLayout}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      icon={UserIcon}
      create={UserCreate}
    />
    <Resource
      name="photos"
      list={photos}
      edit={PhotosEdit}
      icon={ImageIcon}
      create={PhotoCreate}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="comments"
      list={CommentList}
      edit={CommentEdit}
      create={CommentCreate}
      icon={CommentIcon}
    />
    <Resource
      name="todos"
      list={TodoList}
      create={TodoCreate}
      edit={TodoEdit}
      icon={TodoIcon}
    />
  </Admin>
);

export default App;
