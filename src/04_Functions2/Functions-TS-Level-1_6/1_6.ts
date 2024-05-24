type Monster = {
    name: string;
    type: string;
    health: number;
    strength: number;
    speed: number;
};



const monsterFactory = (name: string, type: string, health: number = 100, strength: number = 50, speed: number = 25): Monster => {
    return {
        name,
        type,
        health,
        strength,
        speed
    }
}

const monster1 = monsterFactory("Goblin", "Beast");
console.log(monster1);
const monster2 = monsterFactory("Orc", "Warrior", 120);
const monster3 = monsterFactory("Dragon", "Beast", 200, 150);
const monster4 = monsterFactory("Vampire", "Undead", 150, 100, 40);
console.log(monster2);
console.log(monster3);
console.log(monster4);