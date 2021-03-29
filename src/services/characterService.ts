import http from './http';
import CharacterCreateRequest from "@/requests/CharacterCreateRequest"


export default class CharacterService {
 public async Create(request : CharacterCreateRequest): Promise<Boolean> {
    const response =  await http.post(`/character/create`, request);
    return response.data;
  }
}

// A singleton instance
export const characterService = new CharacterService();