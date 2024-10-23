import { Stack } from "expo-router";

export default function DailyLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Daily" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="passage/[id]" />
      <Stack.Screen name="quote/[id]" />
      <Stack.Screen name="verse/[id]" />
      <Stack.Screen name="word/[id]" />
    </Stack>
  );
}
