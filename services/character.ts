import { CharacterListResponse, CharacterResponse } from "@/types/character";
import { Api } from "./api";

async function getOne(id: string): Promise<CharacterResponse> {
  return Api.get(`/character/${id}`);
}

async function getAll(): Promise<CharacterListResponse> {
  return Api.get(`/character`);
}

const characterService = {
  getOne,
  getAll,
};

export { characterService };
