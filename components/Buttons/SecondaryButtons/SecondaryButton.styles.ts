import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.LightBrown,
    width: 40,
    height: 40,
    borderRadius: 5,
    shadowColor: colors.LightBrownBacking,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
