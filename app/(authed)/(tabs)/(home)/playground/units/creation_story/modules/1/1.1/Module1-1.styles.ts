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
    marginBottom: 40,
    padding: 20,
  },
  dustImageOne: {
    position: "absolute",
    width: 150,
    height: 150,
    top: 130,
    left: 40,
  },
  dustImageTwo: {
    position: "absolute",
    width: 150,
    height: 150,
    bottom: 130,
    right: 40,
    transform: [{ scaleX: -1 }, { scaleY: -1 }],
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  sun: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 10,
    alignSelf: "center",
  },
  bottomWrapper: {
    position: "absolute",
    bottom: "9%",
    alignSelf: "center",
  },
  characterImage: {
    width: 140,
    height: 140,
    position: "absolute",
    top: "40%",
    right: "40%",
  },
  giraffeImage: {
    width: 120,
    height: 120,
    position: "absolute",
    top: "30%",
    right: "-2%",
    transform: [{ scaleX: -1 }],
  },
  dolphinImage: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: "30%",
    right: "10%",
  },
});
