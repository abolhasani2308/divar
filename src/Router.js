import React from "react";

import { createStackNavigator, createTabNavigator } from "react-navigation";

import { Landing, SearchScreen } from "./Screen";

const RootStack = createStackNavigator(
  { _Landing: Landing, _SearchScreen: SearchScreen },
  {
    initialRouteName: "_Landing",
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
