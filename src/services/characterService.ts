import http from './http';
import CharacterCreateRequest from "@/requests/CharacterCreateRequest"
import Character from '@/classes/Character';


export default class CharacterService {
  private baseUrl: string = "http://localhost:5002";

 public async Create(request : CharacterCreateRequest): Promise<Boolean> {
    const response =  await http.post(`${this.baseUrl}/character/create`, request);
    return response.data;
  }

  public async GetAllByUserId(request: number): Promise<Array<Character>> {
    const response =  await http.get(`${this.baseUrl}/character/all/${request}`);
    return response.data;
  }
}

// A singleton instance
export const characterService = new CharacterService();