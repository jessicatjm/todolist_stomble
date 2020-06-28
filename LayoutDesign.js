import React, { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

const Layout = memo(props => (
  <Paper
    elevation={0}
  >
    <AppBar color="secondary" position="static" style={{ height: 60 }}>
      <Toolbar style={{ height: 60 }}>
        <Typography color="inherit">To Do List</Typography>
        
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;
