import React from "react";
import App from "../App";
import SideBar from "./SideBar";
import { DrawerNavigator } from "react-navigation";

const AppRouter = DrawerNavigator(
  {
    Home: { screen: App },
    Resume: { screen: Resume },
    MyStory: { screen: MyStory },
    Projects: {screen: Projects},
    Skills: {screen: Skills}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default AppRouter;