import { ShortcutProps, defaultShortcuts } from "@/styles/shortcuts";
import { View } from "react-native";

interface DividerProps extends ShortcutProps {}

export function Divider(props: DividerProps) {
  return (
    <View
      style={[
        defaultShortcuts(props),
        {
          backgroundColor: "lightGray",
          height: 1,
        },
      ]}
    />
  );
}
