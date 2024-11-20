import React from "react";
import { View } from "react-native";
import NavButton from "@/components/Buttons/NavButton/NavButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { styles } from "./NavigationButtons.styles";

interface NavigationButtonsProps {
  onMenuToggle: () => void;
  router: any;
}

export default function NavigationButtons({
  onMenuToggle,
  router,
}: NavigationButtonsProps) {
  return (
    <View style={styles.navButtons}>
      <NavButton
        IconLibrary={MaterialIcons}
        iconName="checklist"
        iconSize={40}
        iconColor="#AD79EB"
        onPress={() => router.push("/(authed)/(daily)")}
      />
      <NavButton
        IconLibrary={FontAwesome5}
        iconName="play"
        iconSize={40}
        iconColor="#13A4FF"
        onPress={onMenuToggle} // Use the passed function for toggling
      />
      <NavButton
        IconLibrary={FontAwesome6}
        iconName="face-smile-beam"
        iconSize={40}
        iconColor="#E57C17"
        onPress={() => router.push("/(authed)/(profile)")}
      />
    </View>
  );
}