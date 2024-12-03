import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  stickerRevealWindow: {
    position: "absolute",
    alignSelf: "center", // Center horizontally
    top: "30%", // Position 50% down from the top
    transform: [{ translateY: "-50%" }],
    width: "100%",
    borderRadius: 30,
    backgroundColor: colors.LightBlue,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 10, // Thickness of the border
    borderColor: colors.LightBlueBacking, // Border color with transparency
    borderStyle: "solid", // Ensures the border is solid (default, but explicit is better)
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  stickerShow: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: colors.LightBrown,
  },
  sticker: {
    width: 45,
    height: 45,
  },
});
