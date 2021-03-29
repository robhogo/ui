
export default class CharacterCreateRequest {
    public characterClass: number;
    public imageUrl: String;
    public name: String;
    public userId: number;

    constructor(characterClass: number, imageUrl: String, name: string, userId: number){
        this.characterClass = characterClass;
        this.imageUrl = imageUrl;
        this.name = name;
        this.userId = userId;
    }
}