import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import history from "../../store/history";

export default function DrawerContent() {
  return (
    <List>
      <ListItem
        button
        onClick={() => {
          history.push("/");
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>

      <ListItem
        button
        onClick={() => {
          window.open("https://github.com/OR13/chapi-siop.did.ai");
        }}
      >
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary={"Code"} />
      </ListItem>
    </List>
  );
}
