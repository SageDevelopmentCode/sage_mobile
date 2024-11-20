import colors from "@/constants/colors";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";

export const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 900,
    color: colors.BlackText,
  },
  subheading: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.BlackText,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors.BlackText,
  },
});
