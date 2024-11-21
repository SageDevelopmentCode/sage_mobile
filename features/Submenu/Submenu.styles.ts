import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginBottom: 40,
  },
});
