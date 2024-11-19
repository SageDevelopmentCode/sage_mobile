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
    bottom: 150, // Move the character higher above the navButtons
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
});

//
