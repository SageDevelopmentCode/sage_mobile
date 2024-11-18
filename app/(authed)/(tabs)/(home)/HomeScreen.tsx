import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { useNavigation, useRouter } from "expo-router"; // Import useRouter from expo-router
import { styles } from "./HomeScreen.styles"; // Import styles
import Background from "./assets/Background.png"; // Updated import path
import Character from "./assets/CharacterImage.png";

export default function HomeScreen() {
  const [characterPosition] = useState(new Animated.Value(0));
  const router = useRouter();

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
    <ImageBackground
      source={Background}
      style={styles.background}
      resizeMode="cover"
    >
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
