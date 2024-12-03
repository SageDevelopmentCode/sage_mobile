import React from "react";
import { Animated, Image, View } from "react-native";
import { SubHeading, Dialogue } from "@/components/Text/TextComponents";
import ActionButton from "@/components/Buttons/ActionButtons/ActionButton";
import colors from "@/constants/colors";
import { styles } from "./UnlockedStickerWindow.styles";

interface StickerRevealWindowProps {
  slideAnim: Animated.Value;
  closeStickerRevealWindow: () => void;
  imageSource: any;
}

export default function UnlockedStickerWindow({
  slideAnim,
  closeStickerRevealWindow,
  imageSource,
}: StickerRevealWindowProps) {
  return (
    <Animated.View
      style={[
        styles.stickerRevealWindow,
        {
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={styles.stickerShow}>
        <Image
          source={imageSource} // Replace with your image path
          style={styles.sticker}
        />
      </View>
      <SubHeading color={colors.GreenText} style={{ marginBottom: 10 }}>
        Beginning
      </SubHeading>
      <Dialogue color={colors.BlackText} style={{ marginBottom: 20 }}>
        Sticker Unlocked!
      </Dialogue>
      <ActionButton
        style={{ marginTop: 30 }}
        type="PrimaryGreen"
        title="Continue"
        onPress={closeStickerRevealWindow}
      />
    </Animated.View>
  );
}
