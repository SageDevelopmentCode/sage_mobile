import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#38A169", // Green color
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
  },
  topSection: {
    flex: 0.3,
    backgroundColor: colors.SkyBluePrimary,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    padding: 30,
  },
  scrollSection: {
    flex: 0.7,
    backgroundColor: colors.GreenPrimary,
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  activeModule: {
    backgroundColor: colors.PurplePrimary,
    width: 80,
    height: 80,
    borderRadius: 1000,
    shadowColor: colors.PurpleBacking, // Shadow color
    shadowOffset: { width: 0, height: 7 }, // Shadow offset
    shadowOpacity: 1, // Fully opaque shadow
    shadowRadius: 0, // Shadow spread
    elevation: 4, // Add elevation for Android shadow
    marginBottom: 10,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveModule: {
    backgroundColor: colors.GrayPrimary,
    width: 70,
    height: 70,
    borderRadius: 1000,
    shadowColor: colors.GrayBacking, // Shadow color
    shadowOffset: { width: 0, height: 7 }, // Shadow offset
    shadowOpacity: 1, // Fully opaque shadow
    shadowRadius: 0, // Shadow spread
    elevation: 4, // Add elevation for Android shadow
    marginBottom: 10,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  completedModule: {
    backgroundColor: colors.BrightGreen,
    width: 80,
    height: 80,
    borderRadius: 1000,
    shadowColor: colors.BrightGreenBacking, // Shadow color
    shadowOffset: { width: 0, height: 7 }, // Shadow offset
    shadowOpacity: 1, // Fully opaque shadow
    shadowRadius: 0, // Shadow spread
    elevation: 4, // Add elevation for Android shadow
    marginBottom: 10,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    position: "absolute",
    bottom: 55,
    left: "5%", // Moves the left edge of the element to the center of the parent
    width: "90%",
    // height: "40%", // Takes up 4/5 of the screen height
    borderRadius: 30,
    backgroundColor: colors.PrimaryWhite,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 10, // Thickness of the border
    borderColor: "rgba(64, 202, 160, 0.68)", // Border color with transparency
    borderStyle: "solid", // Ensures the border is solid (default, but explicit is better)
    zIndex: 1,
  },
});
