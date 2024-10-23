import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Home" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="journey/[id]" />
    </Stack>
  );
}
