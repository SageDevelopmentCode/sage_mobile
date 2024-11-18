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
    bottom: 40,
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
});
