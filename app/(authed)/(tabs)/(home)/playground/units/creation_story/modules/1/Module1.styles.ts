import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DarkSkyBluePrimary,
    paddingVertical: 65,
    paddingHorizontal: 20,
    position: "relative",
  },
  globeImage: {
    position: "absolute",
    bottom: "-45%",
    left: 0,
    width: "115%",
    zIndex: -2, // Push the image behind other elements
  },
  nextButton: {
    position: "absolute",
    bottom: "9%",
    alignSelf: "center",
  },
  characterImage: {
    width: 200,
    height: 200,
    position: "absolute",
    bottom: "20%", // Move the character higher above the navButtons
    alignSelf: "center", // Center the image horizontally
  },
  dialogOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background
  },
  dialogBox: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(159, 228, 244, 0.6)", // Light blue border with transparency
    borderWidth: 7, // 7px border
  },
  hiddenWordContainer: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: "#8ECCDB",
    alignItems: "center",
    justifyContent: "center",
  },
  stickerRevealWindow: {
    position: "absolute",
    bottom: 55,
    alignSelf: "center", // Center horizontally
    borderRadius: 40,
    backgroundColor: colors.LightBlue,
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 10, // Thickness of the border
    borderColor: colors.LightBlueBacking, // Border color with transparency
    borderStyle: "solid", // Ensures the border is solid (default, but explicit is better)
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
