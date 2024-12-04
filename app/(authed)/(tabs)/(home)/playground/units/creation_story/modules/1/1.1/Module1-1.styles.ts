import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkBackground,
    paddingVertical: 65,
    paddingHorizontal: 20,
    position: "relative",
  },
  centeredTextWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },
  dustImageOne: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 20,
    left: 20,
  },
  dustImageTwo: {
    position: "absolute",
    width: 100,
    height: 100,
    top: 50,
    right: 20,
  },
});
