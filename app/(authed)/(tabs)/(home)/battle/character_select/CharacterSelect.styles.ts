import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkSkyBluePrimary,
    width: "100%",
  },
  topSection: {
    flex: 2.5,
    backgroundColor: colors.DarkSkyBluePrimary,
    position: "relative",
    alignItems: "center",
    width: "100%",
  },
  bottomSection: {
    flex: 7.5,
    backgroundColor: colors.GreenPrimary,
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    padding: 0,
    paddingHorizontal: "7%",
  },
  sunAndMountains: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  characterImage: {
    width: 200,
    height: 200,
    position: "absolute",
    bottom: -15,
    left: "50%",
    marginLeft: -95,
  },
  circlePlatform: {
    backgroundColor: "#FFF1E1",
    width: 128,
    height: 10,
    position: "relative",
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 50, // Half of the height for a fully elliptical shape
    alignItems: "center", // Ensures horizontal centering
  },
  characterCardContainer: {
    padding: 20,
    backgroundColor: colors.GreenBacking2,
    borderRadius: 20,
    margin: 0,
    width: "100%",
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
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 80,
  },
  moveButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFFBF8",
    shadowColor: "#D9D9D9",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2,
    marginBottom: 20,
  },
});
