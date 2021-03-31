export default class Character {
    public id: number;
    public lvl: number;
    public currentXp: number;
    public lvlType: number;

    constructor(id: number, lvl: number, currentXp: number, lvlType: number){
        this.id = id;
        this.lvl = lvl;
        this.currentXp = currentXp;
        this.lvlType = lvlType;
    }
}