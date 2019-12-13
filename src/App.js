import React from "react";
import Router from "./Router";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["createTabNavigator is deprecated"]);
YellowBox.ignoreWarnings(["Functions are not valid"]);

class App extends React.Component {
  render() {
    return <Router />;
  }
}

export default App;
