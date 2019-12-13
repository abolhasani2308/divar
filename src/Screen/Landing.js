import React, { Component } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { TabBottom, Search, Filter, Advertising } from "../Component";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "پراید سفید",
          price: "48.800.000 تومان",
          time: "لحظاتی پیش",
          location: "نیروهوایی",
          icon: require("../Image/01.jpg")
        },
        {
          title: "بی ام و",
          price: "توافقی",
          time: "لحظاتی پیش",
          location: "پیروزی",
          icon: require("../Image/02.jpg")
        },
        {
          title: "بسترن",
          price: "توافقی",
          time: "لحظاتی پیش",
          location: "کریمشاهیان",
          icon: require("../Image/03.jpg")
        },
        {
          title: "ولوو",
          price: "3.000.000.000 تومان",
          time: "لحظاتی پیش",
          location: "پرستار",
          icon: require("../Image/04.jpg")
        }
      ],
      isLoading: false
    };
  }

  reload() {
    this.setState({ isLoading: true }, () =>
      setTimeout(() => this.setState({ isLoading: false }), 1000)
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255,255,255)"
        }}
      >
        <Search navigation={this.props.navigation} />
        <Filter></Filter>
        <FlatList
          style={{ flex: 1, alignSelf: "stretch" }}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <Advertising
                title={item.title}
                price={item.price}
                time={item.time}
                location={item.location}
                icon={item.icon}
              ></Advertising>
            );
          }}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={["rgb(166,38,38)"]}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.reload();
              }}
            ></RefreshControl>
          }
        ></FlatList>
        <TabBottom></TabBottom>
      </View>
    );
  }
}
export { Landing };
