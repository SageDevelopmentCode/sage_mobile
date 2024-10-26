import { characterService } from "@/services/character";
import { Character } from "@/types/character";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

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

  return <></>;
}
