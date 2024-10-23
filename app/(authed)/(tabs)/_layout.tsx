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
      },
    },
    {
      showFor: [],
      name: "(daily)",
      displayName: "Daily",
      icon: "calendar",
      options: {
        headerShown: true,
      },
    },
    {
      showFor: [],
      name: "(profile)",
      displayName: "Profile",
      icon: "scan",
      options: {
        headerShown: true,
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
            headerTitle: tab.displayName,
            // href: tab.showFor.includes
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "black" : "gray", fontSize: 12 }}>
                {tab.displayName}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={tab.icon as ComponentProps<typeof Ionicons>["name"]}
                color={focused ? "black" : "gray" }
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
