import React from "react";

import Menu from "@material-ui/core/Menu";
import { IconButton, Typography } from "@material-ui/core";
import NotificationIcon from "@material-ui/icons/Notifications";

function MyNotification() {
  return (
    <span>
      <IconButton>
        <NotificationIcon />
      </IconButton>
      <Menu disableAutoFocusItem>
        <Typography>My Notifications</Typography>
      </Menu>
    </span>
  );
}

export default MyNotification;
