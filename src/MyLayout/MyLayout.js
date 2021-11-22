import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";
import MyNotification from "./MyNotification";
// import MySidebar from "./MySidebar";
// import MyMenu from "./MyMenu";

const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} notification={MyNotification} />
);

export default MyLayout;
