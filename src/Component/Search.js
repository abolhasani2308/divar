import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: 50,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(245,245,245)"
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            alignSelf: "stretch",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "rgb(250,250,250)",
            flexDirection: "row",
            padding: 5,
            margin: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "rgb(221,221,221)"
          }}
          activeOpacity={1}
          onPress={() => {
            this.props.navigation.navigate("_SearchScreen");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Yekan",
              color: "rgb(173,173,173)"
            }}
          >
            جستجو در همه آگهی ها
          </Text>
          <Image
            source={require("../Image/05.png")}
            style={{
              width: 25,
              height: 25,
              tintColor: "rgb(209,209,209)",
              marginHorizontal: 5
            }}
          ></Image>
        </TouchableOpacity>
      </View>
    );
  }
}
export { Search };
