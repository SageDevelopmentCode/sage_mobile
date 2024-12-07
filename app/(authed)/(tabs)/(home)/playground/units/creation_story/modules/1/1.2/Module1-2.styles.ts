import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkSkyBluePrimary,
    paddingVertical: 65,
    paddingHorizontal: 20,
    width: "100%",
    position: "relative",
  },
  centeredTextWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: "40%", // Position 50% down from the top
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BluePrimaryBacking,
    borderRadius: 10,
    padding: 10,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberContainer: {
    // height: 60,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: colors.LightBrown,
    shadowColor: colors.LightBrownBacking,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  selectedNumberContainer: {
    backgroundColor: colors.PurplePrimary,
    shadowColor: colors.PurpleBacking,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  numberText: {
    fontSize: 24,
    color: colors.BrownText,
    fontWeight: 900,
  },
  selectedNumberText: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.WhiteText,
  },
  feedbackText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  selectedItem: {
    backgroundColor: colors.GreenBacking,
  },
  itemText: {
    fontSize: 24,
    color: colors.WhiteText,
  },
  bottomWrapper: {
    position: "absolute",
    bottom: "7%",
    alignSelf: "center",
    width: "100%",
    padding: 20,
  },
  dialogBox: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(159, 228, 244, 0.6)", // Light blue border with transparency
    borderWidth: 7, // 7px border
    marginTop: 15,
  },
});
