import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace with your icon library
import { styles } from "./NavButton.styles"; // Import styles

type NavButtonProps = {
  iconName: string; // Name of the icon
  iconSize: number;
  iconColor: string;
  onPress: () => void; // Navigation or action when pressed
};

function NavButton({ iconName, onPress, iconSize, iconColor }: NavButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

export default NavButton;
