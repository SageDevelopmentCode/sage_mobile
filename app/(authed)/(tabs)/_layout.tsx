import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";
import { Text } from "react-native";

export default function TabLayout() {
  const tabs = [
    {
      showFor: [],
      name: "(home)",
      displayName: "Home",
      icon: "home",
      options: {
        headerShown: false,
        tabBarShown: false, // This hides the tab bar
      },
    },
    {
      showFor: [],
      name: "(daily)",
      displayName: "Daily",
      icon: "calendar",
      options: {
        headerShown: false,
        tabBarShown: false, // This hides the tab bar
      },
    },
    {
      showFor: [],
      name: "(profile)",
      displayName: "Profile",
      icon: "scan",
      options: {
        headerShown: false,
        tabBarShown: false, // This hides the tab bar
      },
    },
  ];

  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            ...tab.options,
          }}
        />
      ))}
    </Tabs>
  );
}
