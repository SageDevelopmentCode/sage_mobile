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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    padding: 20,
    width: "100%",
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
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.WhiteBacking,
  },
  selectedNumberContainer: {
    backgroundColor: colors.GreenBacking,
  },
  numberText: {
    fontSize: 24,
    color: colors.BluePrimary,
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
});
