import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@/utils/Icons";
import { ButtonText } from "@/components/Text/TextComponents";
import colors from "@/constants/colors";
import { styles } from "./HeaderProgress.styles";

type HeaderProgressProps = {
  progressText: string; // Progress text like "1 / 3"
  onBackPress: () => void; // Callback for back button
};

export default function HeaderProgress({
  progressText,
  onBackPress,
}: HeaderProgressProps) {
  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Ionicons name="chevron-back" color={colors.WhiteText} size={40} />
        </TouchableOpacity>
        <View style={styles.progressWrapper}>
          <View style={styles.progressCount}>
            <ButtonText color={colors.WhiteText}>{progressText}</ButtonText>
          </View>
        </View>
      </View>
    </View>
  );
}
