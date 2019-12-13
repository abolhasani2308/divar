import React, { Component } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
      newTextSearch: ""
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255,255,255)",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            height: 65,
            alignSelf: "stretch",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(250,250,250)",
            flexDirection: "row"
          }}
        >
          <Image
            source={require("../Image/07.png")}
            style={{
              width: 25,
              height: 25,
              tintColor: "rgb(110,110,110)",
              marginHorizontal: 5
            }}
          ></Image>
          <TextInput
            ref={searchInput => {
              this.searchInput = searchInput;
            }}
            style={{
              height: 65,
              width: 270,
              //alignSelf: "stretch",
              fontSize: 15,
              fontFamily: "Yekan",
              textAlign: "right",
              color: "rgb(32,32,32)",
              alignSelf: "stretch",
              //paddingRight: 10,
              //margin: 3,
              //borderRadius: 5,
              //borderWidth: 1,
              //borderColor: "rgb(221,221,221)",
              textAlignVertical: "center"
            }}
            value={this.state.textSearch}
            onChangeText={newTextSearch => {
              this.setState({ textSearch: newTextSearch });
            }}
            //placeholder="جستجو در همه آگهی ها"
            //placeholderTextColor="rgb(173,173,173)"
            returnKeyType={"search"}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image
              source={require("../Image/06.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: "rgb(110,110,110)",
                marginHorizontal: 5
              }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(255,255,255)",
            flexDirection: "row"
          }}
        ></View>
      </View>
    );
  }
}
export { SearchScreen };
