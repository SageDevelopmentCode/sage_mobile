import { HStack } from "@/components/Extra/HStack";
import { Text } from "@/components/Extra/Text";
import { VStack } from "@/components/Extra/VStack";
import { useAuth } from "@/context/AuthContext";
import { characterService } from "@/services/character";
import { Character } from "@/types/character";
import { Href, router, useNavigation } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Touchable, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const { user } = useAuth();

  console.log("user: ", user);

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  function onGoToCharacterPage(id: number) {
    // if (user?.role === UserRole.Parent))

    router.push(
      `/(profile)/characters/${id}` as Href<`/(profile)/characters/${number}`>
    );
  }

  const fetchCharacters = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await characterService.getAll();
      setCharacters(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();

    navigation.setOptions({
      headerTitle: "Characters",
    });
  }, [fetchCharacters, navigation]);

  return (
    <VStack flex={1} p={20} pb={0} gap={20}>
      <HStack alignItems="center" justifyContent="center">
        <Text fontSize={18} bold>
          {characters.length} Characters
        </Text>
      </HStack>
      <FlatList
        data={characters}
        keyExtractor={({ id }) => id.toString()}
        onRefresh={fetchCharacters}
        refreshing={isLoading}
        ItemSeparatorComponent={() => <VStack h={20} />}
        renderItem={({ item: character }) => (
          <VStack
            gap={20}
            p={20}
            style={{ backgroundColor: "white", borderRadius: 20 }}
            key={character.id}
          >
            <TouchableOpacity onPress={() => onGoToCharacterPage(character.id)}>
              <HStack alignItems="center" justifyContent="center">
                <HStack alignItems="center">
                  <Text fontSize={18} bold>
                    {character.name}
                  </Text>
                </HStack>
                {/* TODO: Can check here if the user has that character, and it can be unlocked */}
              </HStack>
            </TouchableOpacity>
          </VStack>
        )}
      />
    </VStack>
  );
}
