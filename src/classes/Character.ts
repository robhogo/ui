import CharacterClass from "./CharacterClass";
import Image from "./Image";

export default class Character {
    public id: number;
    public characterClass: CharacterClass;
    public avatar: Image;
    public name: String;
    public lvl: number;

    constructor(id: number, characterClass: CharacterClass, avatar: Image, name: string, lvl: number){
        this.id = id;
        this.characterClass = characterClass;
        this.avatar = avatar;
        this.name = name;
        this.lvl = lvl;
    }
}