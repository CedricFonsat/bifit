import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZE } from "../../constants/size";
import { COLOR } from "../../constants/color";
import Header from "../../components/Header";
import { getBMR, getCategoryIMC, getIMC } from "../../services/calculator";
import { useSelector } from "react-redux";
import { TypeState } from "../../types/Interface";
import PedometerComponent from "../../components/PedometerComponent";
import { Crown, Footprints } from "lucide-react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import RNListSlider from "react-native-list-slider";

const HomeScreen = () => {
  const onboard = useSelector((state: TypeState) => state.onboard);
  const user = onboard.find((x) => x && x.id === 1);
  // const [slider, setSlider] = useState(3);

  const IMC = getIMC({ size: user?.size || 172, weight: user?.weight || 70 });
  //  const IMG = getIMG({imc: IMC, sex: user?.gender == 'woman' ? 0 : 1, age: user?.age || 20});
  const BMR = getBMR({
    weight: user?.size || 72,
    size: user?.age || 22,
    age: user?.age || 45,
    gender: user?.gender?.toString() || "woman",
  });
  const categoryIMC = getCategoryIMC({ imc: IMC });

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: SIZE.width / 2.7,
            height: SIZE.M100 * 1.1,
            backgroundColor: "rgba(254, 157, 111, .2)",
            marginTop: SIZE.M15,
            borderRadius: SIZE.M15 * 2,
            justifyContent: "center",
            alignItems: "center",
            marginRight: SIZE.M15,
          }}
        >
          <View
            style={{
              width: SIZE.width / 2.9,
              height: SIZE.M100,
              backgroundColor: COLOR.orange,
              borderRadius: SIZE.M15 * 1.7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              value={80}
              radius={40}
              duration={2000}
              maxValue={400}
              title={"Kcal"}
              titleColor={"white"}
              titleStyle={{ fontWeight: "bold" }}
              activeStrokeColor={"#fff"}
              inActiveStrokeColor={"#fff"}
              inActiveStrokeOpacity={0.2}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              width: SIZE.width / 2,
              height: SIZE.M100 * 1.1,
              backgroundColor: "rgba(254, 157, 111, .2)",
              marginTop: SIZE.M15,
              borderRadius: SIZE.M15 * 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: SIZE.width / 2.1,
                height: SIZE.M100 * 1,
                backgroundColor: COLOR.orange,
                borderRadius: SIZE.M15 * 1.7,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Crown size={50} color={COLOR.white} style={{ opacity: 0.7 }} />
              <View
                style={{
                  width: SIZE.M50 * 1.5,
                  height: SIZE.M50 * 1.5,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginLeft: SIZE.M15,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZE.M15 * 2,
                    fontWeight: "bold",
                    color: COLOR.white,
                  }}
                >
                  {BMR?.toFixed(0)}
                </Text>
                <Text
                  style={{
                    fontSize: SIZE.M15 / 1.25,
                    fontWeight: "bold",
                    color: "#FFDEC2",
                  }}
                >
                  kcal par jour
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: SIZE.width / 2,
            height: SIZE.M100 * 1.1,
            backgroundColor: "rgba(254, 157, 111, .2)",
            marginTop: SIZE.M15,
            borderRadius: SIZE.M15 * 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: SIZE.width / 2.1,
              height: SIZE.M100 * 1,
              backgroundColor: COLOR.orange,
              borderRadius: SIZE.M15 * 1.7,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Footprints
              size={50}
              color={COLOR.white}
              style={{ opacity: 0.7 }}
            />
            <Text
              style={{
                fontSize: SIZE.M15 * 2.5,
                fontWeight: "bold",
                color: COLOR.white,
              }}
            >
              {" "}
              <PedometerComponent />
            </Text>
          </View>
        </View>

        <View
          style={{
            width: SIZE.width / 2.7,
            height: SIZE.M100 * 1.1,
            backgroundColor: "rgba(254, 157, 111, .2)",
            marginTop: SIZE.M15,
            borderRadius: SIZE.M15 * 2,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: SIZE.M15,
          }}
        >
          <View
            style={{
              width: SIZE.width / 2.9,
              height: SIZE.M100,
              backgroundColor: COLOR.orange,
              borderRadius: SIZE.M15 * 1.7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLOR.lightOrange, fontWeight: "600" }}>
              IMC %
            </Text>
            <Text
              style={{
                fontSize: SIZE.M15 * 2,
                fontWeight: "bold",
                color: COLOR.white,
              }}
            >
              {" "}
              {IMC.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: SIZE.M15,
        }}
      >
        <Text style={{ fontSize: SIZE.M15 * 1.5 }}>
          Vous ête en {categoryIMC}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.gray,
  },
});
