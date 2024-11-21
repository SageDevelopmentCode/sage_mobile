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
  },
  topSection: {
    flex: 0.3, // 1/5 of the screen height
    backgroundColor: colors.SkyBluePrimary,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    padding: 30,
  },
  scrollSection: {
    flex: 0.7, // 4/5 of the screen height
    backgroundColor: "#e9ecef",
    padding: 10,
  },
  module: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  moduleContent: {
    fontSize: 14,
    color: "#555",
  },
});
