import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Advertising extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 150,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255,255,255)",
          borderBottomWidth: 1,
          borderBottomColor: "rgb(224,224,224)",
          flexDirection: "row"
        }}
        activeOpacity={1}
      >
        <View
          style={{
            flex: 1.2,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 10
          }}
        >
          <Image
            source={this.props.icon}
            style={{
              width: 130,
              height: 130,
              borderRadius: 8
            }}
          ></Image>
        </View>
        <View
          style={{
            flex: 2,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Yekan",
                color: "rgb(33,33,33)"
              }}
            >
              {this.props.title}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          ></View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(110,110,110)"
              }}
            >
              {this.props.price}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              //paddingHorizontal: 10,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingHorizontal: 5
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Yekan",
                  color: "rgb(110,110,110)"
                }}
              >
                {this.props.location}
              </Text>
            </View>
            <View
              style={{
                //flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Yekan",
                  color: "rgb(110,110,110)"
                }}
              >
                در
              </Text>
            </View>
            <View
              style={{
                //flex: 1,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingRight: 10,
                paddingLeft: 5
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Yekan",
                  color: "rgb(110,110,110)"
                }}
              >
                {this.props.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export { Advertising };
