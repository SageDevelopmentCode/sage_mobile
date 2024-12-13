import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkSkyBluePrimary,
    width: "100%",
  },
  topSection: {
    flex: 2,
    backgroundColor: colors.DarkSkyBluePrimary,
    position: "relative",
    alignItems: "center",
    width: "100%",
  },
  bottomSection: {
    flex: 8,
    backgroundColor: colors.GreenPrimary,
    position: "relative",
    alignItems: "center",
    width: "100%",
  },
  sunAndMountains: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  characterImage: {
    width: 200,
    height: 200,
  },
  characterCardContainer: {
    padding: 20,
    backgroundColor: colors.GreenBacking2,
    borderRadius: 20,
    // alignItems: "center",
    width: "90%",
  },
  attackAndDefense: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  weaponIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
