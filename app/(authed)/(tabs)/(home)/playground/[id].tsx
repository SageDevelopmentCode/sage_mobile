import { Text } from "@/components/Text";
import { useLocalSearchParams } from "expo-router";

export default function PlaygroundScreen() {
  const { id } = useLocalSearchParams();

  console.log("id: ", id);
  return (
    <>
      <Text>This is the playground screen</Text>
    </>
  );
}
