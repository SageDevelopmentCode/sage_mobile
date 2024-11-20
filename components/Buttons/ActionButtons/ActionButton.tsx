import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styles } from "../ActionButtons/ActionButton.styles";
import { useFonts } from "expo-font";
import { useCustomFonts } from "@/constants/fonts";

interface ActionButtonProps {
  title: string; // Button text
  onPress: () => void; // Click handler
  type?: "primary" | "BrightGreen" | "LightBrown" | "PrimaryBlue"; // Button type
  style?: ViewStyle; // Additional container styles
  textStyle?: TextStyle; // Additional text styles
  disabled?: boolean; // Disable the button
}

function ActionButton({
  title,
  onPress,
  type = "primary",
  style,
  textStyle,
  disabled = false,
}: ActionButtonProps) {
  const fontsLoaded = useCustomFonts(); // Use the custom font hook

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const getButtonStyle = () => {
    switch (type) {
      case "BrightGreen":
        return [styles.BrightGreenButton, disabled && styles.disabled];
      case "LightBrown":
        return [styles.LightBrownButton, disabled && styles.disabled];
      case "PrimaryBlue":
        return [styles.PrimaryBlueButton, disabled && styles.disabled];
      default:
        return [styles.BrightGreenButton, disabled && styles.disabled];
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case "BrightGreen":
        return styles.WhiteText;
      case "LightBrown":
        return styles.DarkBrownText;
      case "PrimaryBlue":
        return styles.WhiteText;
      default:
        return styles.WhiteText;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getButtonStyle(), style]}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          getTextStyle(),
          textStyle,
          { fontFamily: "Nunito_800ExtraBold" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default ActionButton;