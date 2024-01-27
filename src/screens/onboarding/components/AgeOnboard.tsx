import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SIZE } from "../../../constants/size";
import { COLOR } from "../../../constants/color";
import WheelPicker from "react-native-wheely";

export const AgeOnboard = ({ value, onChangeText, name }: any) => {
  const ageInputRef = useRef<TextInput>(null);

  useEffect(() => {
    ageInputRef.current?.focus();
  }, []);

  const tableauDeNombres = Array.from({ length: 48 }, (_, index) => 18 + index);

  return (
    <View
      style={{
        width: SIZE.M100 * 3,
        justifyContent: "center",
        alignItems: "center",
        marginTop: SIZE.M50,
      }}
    >
      <Text
        style={{
          marginBottom: SIZE.M15,
          fontSize: SIZE.M15 * 1.5,
          textAlign: "center",
          color: COLOR.white,
          fontWeight: "bold",
        }}
      >
        Quel est votre age {name} ?
      </Text>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          height: 250,
        }}
      >
        <WheelPicker
          options={tableauDeNombres}
          selected={value}
          onChange={onChangeText}
          containerStyle={{
            width: SIZE.width,
            alignItems: "center",
            justifyContent: "center",
          }}
          itemTextStyle={{
            fontSize: 70,
            fontWeight: "bold",
            color: COLOR.white,
          }}
          itemHeight={100}
          selectedIndicatorStyle={{
            width: 150,
            height: 100,
            borderRadius: SIZE.M15 * 2,
            backgroundColor: COLOR.orange,
          }}
        />
      </View>
    </View>
  );
};
