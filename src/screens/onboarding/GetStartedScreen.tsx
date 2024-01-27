import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SIZE } from "../../constants/size";
import { COLOR } from "../../constants/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { YourNavigatorParams } from "../../types/Interface";

const GetStartedScreen = () => {
  const navigation: NavigationProp<YourNavigatorParams> = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.orange,
      }}
    >
      <ImageBackground
        source={require("../../../assets/png/bg1.png")}
        style={{
          flex: 1,
          width: SIZE.width,
          height: SIZE.height,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            width: SIZE.width,
            height: SIZE.height,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: SIZE.M50,
              fontWeight: "bold",
              color: COLOR.white,
              textAlign: "center",
              marginTop: SIZE.M50 * 1.5,
            }}
          >
            Let's Go {"\n"}{" "}
            <Text
              style={{
                fontStyle: "italic",
                fontSize: SIZE.M50 * 1.3,
              }}
            >
              Bifit
            </Text>
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Onboard")}
            style={{
              width: SIZE.width / 1.2,
              height: SIZE.M50 * 1.1,
              backgroundColor: COLOR.white,
              marginBottom: SIZE.M50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SIZE.M100,
            }}
          >
            <Text
              style={{
                fontSize: SIZE.M15 * 1.8,
                color: COLOR.orange,
                fontWeight: "bold",
                zIndex: 3,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>

          <Image
            style={{ position: "absolute", top: 100, zIndex: -1 }}
            source={require("../../../assets/png/man1.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({});
