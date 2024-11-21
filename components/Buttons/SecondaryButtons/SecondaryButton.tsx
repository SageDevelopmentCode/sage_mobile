import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./SecondaryButton.styles"; // Import styles

type SecondaryButtonActionProps= {
  iconName: string; // Name of the icon
  iconSize: number;
  iconColor: string;
  IconLibrary: any;
  onPress: () => void; // Secondaryigation or action when pressed
};

const SecondaryButtonAction = ({
  iconName,
  onPress,
  iconSize,
  iconColor,
  IconLibrary,
}: SecondaryButtonActionProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <IconLibrary name={iconName} size={iconSize} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export { SecondaryButtonAction };
