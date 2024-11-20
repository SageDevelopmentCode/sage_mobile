import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.LightBrown,
    width: 80,
    height: 80,
    borderRadius: 20,
    shadowColor: colors.LightBrownBacking,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8, // Space between buttons
    padding: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
