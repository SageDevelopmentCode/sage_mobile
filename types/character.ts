import { ApiResponse } from "./api";

interface FruitMultiplier {
  [key: string]: number; // Assuming fruit multipliers are key-value pairs with string keys and number values
}

interface LevelImage {
  [key: string]: string; // Assuming level images are key-value pairs with string keys and string values (URLs, etc.)
}

export type CharacterResponse = ApiResponse<Character>;
export type CharacterListResponse = ApiResponse<Character[]>;

export type Character = {
  id: number; // Corresponds to uint in Go
  name: string;
  description: string;
  fruit_multipliers: FruitMultiplier; // Use the type defined above
  level_images: LevelImage; // Use the type defined above
  created_at: string; // Use Date for time.Time
  updated_at: string; // Use Date for time.Time
};
