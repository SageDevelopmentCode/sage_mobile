import {
  Animated,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Module1-1.styles";
import { useLocalSearchParams, useNavigation } from "expo-router";
import HeaderProgress from "@/components/Modules/HeaderProgress/HeaderProgress";
import {
  ButtonText,
  Paragraph,
  SubHeading,
} from "@/components/Text/TextComponents";
import { Ionicons } from "@/utils/Icons";
import colors from "@/constants/colors";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { useEffect, useRef, useState } from "react";
import { useLevitation } from "@/hooks/useLevitation";

export default function ModuleOneScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const [dustFloating, setDustFloating] = useState(true);
  const [preScreen, setPreScreen] = useState(true);

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
    <>
      {preScreen ? (
        <View style={styles.container}>
          <HeaderProgress
            progressText="3 / 5"
            onBackPress={() => navigation.goBack()}
            backgroundColor={colors.BluePrimaryBacking}
          />
          <View style={styles.centeredTextWrapper}>
            <SubHeading
              style={{ textAlign: "center" }}
              color={colors.WhiteText}
            >
              In Genesis,{" "}
              <Text style={{ color: colors.GreenPrimary }}>God</Text> made
              everything from{" "}
              <Text style={{ color: colors.PurplePrimary }}>nothing</Text>{" "}
              {/* In Genesis, God made everything from nothing */}
            </SubHeading>
            <ActionButton
              style={{ marginTop: 20 }}
              type="PrimaryBlue"
              title="Let there be light"
              onPress={() => {
                setPreScreen(false);
              }}
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
      ) : (
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/1.1/Background1-1.png")}
          resizeMode="cover"
        >
          {/* Absolute Content */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back"
                color={colors.WhiteText}
                size={40}
              />
            </TouchableOpacity>
            <View style={styles.progressWrapper}>
              <View style={[styles.progressCount]}>
                <ButtonText color={colors.WhiteText}>3 / 5</ButtonText>
              </View>
            </View>
          </View>
          <Image
            source={require("../../../assets/1.1/Sun.png")} // Replace with your image path
            style={styles.sun}
          />

          <Image
            source={require("../../../../../../assets/CharacterImage.png")} // Replace with your image path
            style={styles.characterImage}
          />

          <Image
            source={require("../../../assets/1.1/Giraffe.png")} // Replace with your image path
            style={styles.giraffeImage}
          />

          <Image
            source={require("../../../assets/1.1/Elephant.png")} // Replace with your image path
            style={styles.elephantImage}
          />

          <Image
            source={require("../../../assets/1.1/Dolphin.png")} // Replace with your image path
            style={styles.dolphinImage}
          />

          <View style={styles.centeredWrapper}>
            <ButtonText
              style={{ textAlign: "center" }}
              color={colors.WhiteText}
            >
              God made everything from
            </ButtonText>
            <ActionButton
              style={{ marginTop: 10 }}
              type="PrimaryGray"
              title="Nothing"
              onPress={() => {
                setPreScreen(true);
              }}
            />
          </View>

          <View style={styles.bottomWrapper}>
            <ButtonText
              style={{ textAlign: "center" }}
              color={colors.WhiteText}
            >
              by His Word.
            </ButtonText>
            <ActionButton
              style={{ marginTop: 25 }}
              type="BrightGreen"
              title="Next"
              onPress={() => {
                setPreScreen(true);
              }}
            />
          </View>
        </ImageBackground>
      )}
    </>
  );
}
