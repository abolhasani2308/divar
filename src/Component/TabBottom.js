import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class TabBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: 65,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(250,250,250)",
          flexDirection: "row"
        }}
      >
        {/*First Touchable */}
        <TouchableOpacity
          style={{
            flex: 1,
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
              alignItems: "center"
            }}
          >
            <Image
              source={require("../Image/01.png")}
              style={{ width: 25, height: 25, tintColor: "rgb(110,110,110)" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(110,110,110)"
              }}
            >
              دیوار من
            </Text>
          </View>
        </TouchableOpacity>
        {/*Second Touchable */}
        <TouchableOpacity
          style={{
            flex: 1,
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
              alignItems: "center"
            }}
          >
            <Image
              source={require("../Image/02.png")}
              style={{ width: 25, height: 25, tintColor: "rgb(110,110,110)" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(110,110,110)"
              }}
            >
              چت
            </Text>
          </View>
        </TouchableOpacity>
        {/*First Touchable */}
        <TouchableOpacity
          style={{
            flex: 1,
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
              alignItems: "center"
            }}
          >
            <Image
              source={require("../Image/03.png")}
              style={{ width: 25, height: 25, tintColor: "rgb(110,110,110)" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(110,110,110)"
              }}
            >
              ثبت آگهی{" "}
            </Text>
          </View>
        </TouchableOpacity>
        {/*First Touchable */}
        <TouchableOpacity
          style={{
            flex: 1,
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
              alignItems: "center"
            }}
          >
            <Image
              source={require("../Image/04.png")}
              style={{ width: 25, height: 25, tintColor: "rgb(110,110,110)" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(110,110,110)"
              }}
            >
              دسته ها
            </Text>
          </View>
        </TouchableOpacity>
        {/*First Touchable */}
        <TouchableOpacity
          style={{
            flex: 1,
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
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(166,38,38)"
              }}
            >
              دیوار
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Yekan",
                color: "rgb(166,38,38)"
              }}
            >
              تهران
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export { TabBottom };
