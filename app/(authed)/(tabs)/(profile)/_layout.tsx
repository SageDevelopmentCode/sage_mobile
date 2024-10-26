import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Profile" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="characterList/[id]" />
    </Stack>
  );
}
