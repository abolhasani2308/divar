import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { icon: require("../Image/08.png"), name: "فیلترها", id: 1 },
        { icon: require("../Image/04.png"), name: "دسته ها", id: 1 },
        { icon: "", name: "خودرو سواری", id: 0 },
        { icon: "", name: "فروش مسکونی", id: 0 },
        { icon: "", name: "اجاره مسکونی", id: 0 },
        { icon: "", name: "موبایل", id: 0 },
        { icon: "", name: "مبلمان", id: 0 },
        { icon: "", name: "حیوانات", id: 0 },
        { icon: "", name: "وسایل شخصی", id: 0 },
        { icon: "", name: "خدمات", id: 0 },
        { icon: "", name: "استخدام", id: 0 },
        { icon: "", name: "تلویزیون", id: 0 },
        { icon: "", name: "تعیین محل", id: 0 },
        { icon: "", name: "تعیین قیمت", id: 0 }
      ]
    };
  }

  render() {
    return (
      <View
        style={{
          height: 45,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(245,245,245)"
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: "stretch" }}
          data={this.state.data}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "rgb(224,224,224)",
                  margin: 5,
                  paddingHorizontal: 20,
                  flexDirection: "row"
                }}
                activeOpacity={1}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Yekan",
                    color: "rgb(110,110,110)"
                  }}
                >
                  {item.name}
                </Text>
                {item.id == 1 ? (
                  <Image
                    source={item.icon}
                    style={{
                      width: 15,
                      height: 15,
                      tintColor: "rgb(110,110,110)",
                      marginLeft: 5
                    }}
                  ></Image>
                ) : (
                  () => {}
                )}
              </TouchableOpacity>
            );
          }}
          horizontal
          keyExtractor={item => item.name}
          showsHorizontalScrollIndicator={false}
          inverted
        ></FlatList>
      </View>
    );
  }
}
export { Filter };
