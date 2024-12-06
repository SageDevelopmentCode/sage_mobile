import { Animated, Text, View } from "react-native";
import { styles } from "./Module1-1.styles";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import { SubHeading } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { useEffect, useRef, useState } from "react";
import { useLevitation } from "@/hooks/useLevitation";

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [dustFloating, setDustFloating] = useState(true);

  const {
    translateY: translateYOne,
    startLevitation: startOne,
    stopLevitation: stopOne,
  } = useLevitation();
  const {
    translateY: translateYTwo,
    startLevitation: startTwo,
    stopLevitation: stopTwo,
  } = useLevitation(0, -10); // Reverse direction

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    if (dustFloating) {
      startOne();
      startTwo();
    } else {
      stopOne();
      stopTwo();
    }

    return () => {
      stopOne();
      stopTwo();
    };
  }, [dustFloating]);

  return (
    <View style={styles.container}>
      <HeaderProgress
        progressText="3 / 5"
        onBackPress={() =>
          router.push({
            pathname:
              "/(authed)/(home)/playground/units/creation_story/modules/1/1.0/[id]",
            params: { id: "521g13245" },
          })
        }
        backgroundColor={colors.BluePrimaryBacking}
      />
      <View style={styles.centeredTextWrapper}>
        <SubHeading style={{ textAlign: "center" }} color={colors.WhiteText}>
          In Genesis, <Text style={{ color: colors.GreenPrimary }}>God</Text>{" "}
          made everything from{" "}
          <Text style={{ color: colors.PurplePrimary }}>nothing</Text>{" "}
        </SubHeading>
        <ActionButton
          style={{ marginTop: 20 }}
          type="PrimaryBlue"
          title="Let there be light"
          onPress={() =>
            router.push({
              pathname:
                "/(authed)/(home)/playground/units/creation_story/modules/1/1.1/1.1.2/[id]",
              params: { id: "onepointonepointtwo" },
            })
          }
        />
      </View>

      <Animated.Image
        source={require("../../../assets/Dust.png")} // Replace with your image path
        style={[
          styles.dustImageOne,
          {
            transform: [{ translateY: translateYOne }], // Apply the animation
          },
        ]}
      />
      <Animated.Image
        source={require("../../../assets/Dust.png")} // Replace with your image path
        style={[
          styles.dustImageTwo,
          { transform: [{ translateY: translateYTwo }] },
        ]}
      />
    </View>
  );
}
