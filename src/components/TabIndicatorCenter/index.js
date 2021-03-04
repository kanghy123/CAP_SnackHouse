import React from "react";
import { Tab, withStyles } from "@material-ui/core";

/* tabs có indicator căn giữa */
const TabIndicatorCenter = withStyles(
  (theme) => ({
    root: {
      minHeight: theme.spacing(4),
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: 3,
      "& > span": {
        maxWidth: 50,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      },
    },
  }),
  {
    name: "AtomTabsIndicatorCenter",
  }
)((props) => <Tab {...props} TabIndicatorProps={{ children: <span /> }} />);
export default TabIndicatorCenter;
