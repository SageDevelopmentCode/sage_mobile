import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkSkyBluePrimary,
    paddingVertical: 65,
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 2,
    backgroundColor: colors.DarkSkyBluePrimary,
    position: "relative",
  },
  bottomSection: {
    flex: 8,
    backgroundColor: colors.GreenPrimary,
    position: "relative",
  },
  sunAndMountains: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  characterImage: {
    position: "absolute",
    top: "10%",
    width: 200,
    height: 200,
  },
});
