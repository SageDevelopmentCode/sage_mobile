import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    width: "100%",
  },
  BrightGreenButton: {
    backgroundColor: colors.BrightGreen,
    shadowColor: colors.BrightGreenBacking,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  LightBrownButton: {
    backgroundColor: colors.LightBrown,
    shadowColor: colors.LightBrownBacking,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  PrimaryBlueButton: {
    backgroundColor: colors.BluePrimary,
    shadowColor: colors.BluePrimaryBacking,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  dangerButton: {
    backgroundColor: "#DC3545",
  },
  disabled: {
    backgroundColor: "#E0E0E0",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  WhiteText: {
    color: colors.WhiteText,
  },
  DarkBrownText: {
    color: "#9E6329",
  },
  secondaryText: {
    color: "#FFFFFF",
  },
  dangerText: {
    color: "#FFFFFF",
  },
});
