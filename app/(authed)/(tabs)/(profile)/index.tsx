import { HStack } from "@/components/HStack";
import { Text } from "@/components/Text";
import { VStack } from "@/components/VStack";
import { characterService } from "@/services/character";
import { Character } from "@/types/character";
import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Touchable, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

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
  }, [fetchCharacters]);

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
            <TouchableOpacity>
              <HStack alignItems="center" justifyContent="center">
                <HStack alignItems="center">
                  <Text fontSize={18} bold>
                    {character.name}
                  </Text>
                </HStack>
              </HStack>
            </TouchableOpacity>
          </VStack>
        )}
      />
    </VStack>
  );
}
