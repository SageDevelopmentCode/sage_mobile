import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: "Home" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="journey/[id]" />
      <Stack.Screen name="playground/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/[id]" />
      <Stack.Screen name="playground/units/creation_story/modules/1/1.1/[id]" />
      <Stack.Screen name="playground/units/creation_story/IntroScreen" />
      <Stack.Screen name="playground/units/creation_story/Modules" />
    </Stack>
  );
}
