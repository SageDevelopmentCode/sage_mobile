import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

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
    color: colors.BlackText,
  },
  buttonText: {
    fontSize: 20,
    color: colors.WhiteText,
  },
});
