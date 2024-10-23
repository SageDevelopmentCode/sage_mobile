import { HStack } from "@/components/HStack";
import { VStack } from "@/components/VStack";
import { Input } from "@/components/input";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Text } from "@/components/text";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function Login() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <VStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          p={40}
          gap={40}
        >
          <HStack gap={10}>
            <Text fontSize={30} bold mb={20}>
              Sage
            </Text>
            <TabBarIcon name="ticket" size={50} />
          </HStack>
          <VStack w={"100%"} gap={30}>
            <VStack gap={5}>
              <Text ml={10} fontSize={14} color="gray">
                Email
              </Text>
              <Input />
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
