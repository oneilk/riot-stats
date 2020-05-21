import React from "react";
import { Box, Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <>
      <div role="tabpanel" hidden={value !== index}>
        {children}
      </div>
    </>
  );
}

export default TabPanel;
