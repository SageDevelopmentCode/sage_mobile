import {
  Animated,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Module1-1.styles";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { ButtonText } from "@/components/Text/TextComponents";
import { Ionicons } from "@/utils/Icons";
import colors from "@/constants/colors";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import { useEffect, useRef, useState } from "react";

export default function ModuleOnePointOneScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const [giraffeDirection, setGiraffeDirection] = useState(1); // 1 for right, -1 for left
  const [elephantDirection, setElephantDirection] = useState(-1); // 1 for right, -1 for left
  const giraffePosition = useRef(new Animated.Value(0)).current; // Controls horizontal position
  const elephantPosition = useRef(new Animated.Value(0)).current; // Controls horizontal position

  const animateGiraffe = () => {
    const randomDistance = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Random value between 20 and 40
    const randomDirection = Math.random() < 0.5 ? -1 : 1; // Random direction: -1 or 1

    setGiraffeDirection(randomDirection);

    Animated.timing(giraffePosition, {
      toValue: randomDirection === 1 ? randomDistance : -randomDistance,
      duration: 9000,
      useNativeDriver: true,
    }).start();
  };

  const animateElephant = () => {
    const randomDistance = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Random value between 20 and 40
    const randomDirection = Math.random() < 0.5 ? -1 : 1; // Random direction: -1 or 1

    setElephantDirection(randomDirection);

    Animated.timing(elephantPosition, {
      toValue: randomDirection === 1 ? randomDistance : -randomDistance,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateGiraffe();
    animateElephant();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      animateGiraffe();
      animateElephant();
    }, 9000); // Trigger a new animation every 9 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../../../../assets/1.1/Background1-1.png")}
        resizeMode="cover"
      >
        {/* Absolute Content */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" color={colors.WhiteText} size={40} />
          </TouchableOpacity>
          <View style={styles.progressWrapper}>
            <View style={[styles.progressCount]}>
              <ButtonText color={colors.WhiteText}>3 / 5</ButtonText>
            </View>
          </View>
        </View>
        <Image
          source={require("../../../../assets/1.1/Sun.png")} // Replace with your image path
          style={styles.sun}
        />

        <Image
          source={require("../../../../../../../assets/CharacterImage.png")} // Replace with your image path
          style={styles.characterImage}
        />

        <Animated.Image
          source={require("../../../../assets/1.1/Giraffe.png")}
          style={[
            styles.giraffeImage,
            {
              transform: [
                { translateX: giraffePosition }, // Horizontal movement
                { scaleX: giraffeDirection }, // Flip image based on direction
              ],
            },
          ]}
        />

        <Animated.Image
          source={require("../../../../assets/1.1/Elephant.png")} // Replace with your image path
          style={[
            styles.elephantImage,
            {
              transform: [
                { translateX: elephantPosition }, // Horizontal movement
                { scaleX: elephantDirection }, // Flip image based on direction
              ],
            },
          ]}
        />

        <Image
          source={require("../../../../assets/1.1/Dolphin.png")} // Replace with your image path
          style={styles.dolphinImage}
        />

        <View style={styles.centeredWrapper}>
          <ButtonText style={{ textAlign: "center" }} color={colors.WhiteText}>
            God made everything from
          </ButtonText>
          <ActionButton
            style={{ marginTop: 10 }}
            type="PrimaryGray"
            title="Nothing"
            onPress={() =>
              router.push({
                pathname:
                  "/(authed)/(home)/playground/units/creation_story/modules/1/1.1/[id]",
                params: { id: "f1jaefwljq" },
              })
            }
          />
        </View>

        <View style={styles.bottomWrapper}>
          <ButtonText style={{ textAlign: "center" }} color={colors.WhiteText}>
            by His Word.
          </ButtonText>
          <ActionButton
            style={{ marginTop: 25 }}
            type="BrightGreen"
            title="Next"
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </>
  );
}
