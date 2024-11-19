import { StyleSheet } from "react-native";

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
    height: 83,
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
  submenuContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%", // Takes up 4/5 of the screen
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  submenuContent: {
    flex: 1,
    padding: 20,
  },
  submenuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  submenuText: {
    fontSize: 16,
  },
  menu: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%", // Takes up 4/5 of the screen height
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    top: 20, // Adjust for gap from the top of the screen
    right: 20, // Adjust for gap from the right edge
    zIndex: 3, // Ensure it is above the overlay and menu
    backgroundColor: "#FFFFFF",
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
  outsideCloseButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

//
