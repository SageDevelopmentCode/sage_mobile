import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressWrapper: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  progressCount: {
    borderRadius: 20,
    backgroundColor: colors.DarkSkyBlueBacking,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 6,
  },
});
