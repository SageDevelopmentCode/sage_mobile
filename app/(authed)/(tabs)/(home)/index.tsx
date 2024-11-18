import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation, useRouter } from "expo-router"; // Import useRouter from expo-router
import Background from "../../../assets/Background.png"; // Full-sized background image
import Character from "../../../assets/CharacterImage.png";

export default function HomeScreen() {
  const [characterPosition] = useState(new Animated.Value(0));
  const router = useRouter(); // Use router from expo-router

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const moveCharacter = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(characterPosition, {
            toValue: 300, // Move 300 units right
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(characterPosition, {
            toValue: 0, // Move back to the starting point
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    moveCharacter();
  }, [characterPosition]);

  return (
    <ImageBackground source={Background} style={styles.background}>
      {/* Wandering Character */}
      <Animated.View
        style={[
          styles.character,
          { transform: [{ translateX: characterPosition }] },
        ]}
      >
        <Image source={Character} style={styles.characterImage} />
      </Animated.View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(authed)/(tabs)/(daily)")} // Navigate to Daily screen
        >
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(authed)/(profile)")} // Navigate to Profile screen
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(authed)/(home)")} // Navigate to Home screen
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  character: {
    position: "absolute",
    bottom: 40,
    left: 0,
  },
  characterImage: {
    width: 64,
    height: 64,
  },
  navButtons: {
    position: "absolute",
    bottom: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#38A169", // Green color
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
