import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerStatusBarHeight: 0,
          headerShown: false,
          tabBarButton: () => null, // Hide the tab bar button for this screen
          tabBarStyle: { display: "none" }, // Prevent tab bar rendering
        }}
      />
      <Tabs.Screen
        name="(daily)"
        options={{
          headerShown: false,
          // tabBarButton: () => null,
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          // tabBarButton: () => null,
          // tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
