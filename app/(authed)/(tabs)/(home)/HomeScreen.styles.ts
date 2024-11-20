import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  character: {
    position: "absolute",
    // bottom: 150, // Move the character higher above the navButtons
    left: 0,
  },
  characterImage: {
    width: 128,
    height: 128,
  },
  navButtons: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 85,
    height: 85,
    backgroundColor: "#FFF1E1", // Light peach color
    shadowColor: "#D9C7B4", // Shadow color
    shadowOffset: { width: 0, height: 7 }, // Shadow offset
    shadowOpacity: 1, // Fully opaque shadow
    shadowRadius: 1, // Shadow spread
    elevation: 4, // Add elevation for Android shadow
    borderRadius: 20, // Rounded corners
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black tint with some transparency
  },
  menu: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%", // Takes up 4/5 of the screen height
    backgroundColor: colors.SkyBluePrimary,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 1,
  },
  menuContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 5,
  },
  outsideCloseButton: {
    position: "absolute",
    top: 40, // Adjust the gap from the top of the screen
    left: "50%", // Center horizontally
    transform: [{ translateX: -20 }], // Offset to truly center the button (half of the button's width)
    zIndex: 3, // Ensure it is above the overlay and menu
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  subMenuItem: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.GreenPrimary,
    borderRadius: 20,
    shadowColor: colors.GreenBacking,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    alignItems: "center",
  },
});
