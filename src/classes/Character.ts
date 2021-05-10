import CharacterClass from "./CharacterClass";
import CharacterLvl from "@/classes/CharacterLvl";

export default class Character {
    public id: number;
    public characterClass: CharacterClass;
    public imgUrl: string;
    public name: String;
    public money: number;
    public userId: number;
    public combatLvl: CharacterLvl;
    public craftingLvl: CharacterLvl;
    public gatheringLvl: CharacterLvl;

    constructor(id: number, characterClass: CharacterClass, imgUrl: string, name: string, userId: number, 
        combatlvl: CharacterLvl, craftinglvl: CharacterLvl, gatheringlvl: CharacterLvl, money: number){
        this.id = id;
        this.characterClass = characterClass;
        this.imgUrl = imgUrl;
        this.name = name;
        this.combatLvl = combatlvl;
        this.craftingLvl = craftinglvl;
        this.gatheringLvl = gatheringlvl;
        this.money = money;
        this.userId = userId;
    }
}