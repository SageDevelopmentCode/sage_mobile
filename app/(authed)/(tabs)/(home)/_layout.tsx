import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Home" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="journey/[id]" />
      <Stack.Screen name="playground/[id]" />
      {/* <Stack.Screen name="playground/units/discovering_faith/modules/1/[id]" /> */}
      <Stack.Screen name="playground/units/discovering_faith/IntroScreen" />
      <Stack.Screen name="playground/units/discovering_faith/Modules" />
    </Stack>
  );
}
