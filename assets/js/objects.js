//Clase Mokepon
class Mokepon {
    constructor(name, completeImg, headImg, lifePoints, experiencePoints, type) {
        this.name = name;
        this.completeImg = completeImg;
        this.headImg = headImg;
        this.lifePoints = lifePoints;
        this.experiencePoints = experiencePoints;
        this.type = type;
        this.normalAttacks = [punietazo, patada, cabezazo, placaje];
        this.defenseAttacks = [parar, esquivar, bloquear];
        this.typeAttacks = [];
        this.totalAttacks = [normalAttacks, defenseAttacks, typeAttacks];
    }
    // Métodos para obtener y modificar los atributos
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getCompleteImg() {
        return this.completeImg;
    }

    setCompleteImg(completeImg) {
        this.completeImg = completeImg;
    }

    getHeadImg() {
        return this.headImg;
    }

    setHeadImg(headImg) {
        this.headImg = this.headImg;
    }

    getLifePoints() {
        return this.lifePoints;
    }

    setLifePoints(lifePoints) {
        this.lifePoints = lifePoints;
    }

    getExperiencePoints() {
        return this.experiencePoints;
    }

    setExperiencePoints(experiencePoints) {
        this.experiencePoints = experiencePoints;
    }

    getType() {
        return this.tipo;
    }

    setType(type) {
        this.type = type;
    }
}

//Clase Personaje
class Character {
    constructor(name, completeImg, headImg) {
        this.name = name;
        this.completeImg = completeImg;
        this.headImg = headImg;
        this.Mokepon;
    }
    // Métodos para obtener y modificar los atributos
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getCompleteImg() {
        return this.completeImg;
    }

    setCompleteImg(completeImg) {
        this.completeImg = completeImg;
    }

    getHeadImg() {
        return this.headImg;
    }

    setHeadImg(headImg) {
        this.headImg = this.headImg;
    }
}

class normalAttacks {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
        this.experience = 1;
        this.lapse = 1;
    }
}

class defenseAttacks {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
        this.experience = 5;
        this.lapse = 2;
    }
}

class typeAttacks {
    constructor(name, type, minDamage, normalDamage, maxDamage, experience, lapse, unlocked, requiredExperience) {
        this.name = name;
        this.type = type;
        this.minDamage = minDamage;
        this.normalDamage = normalDamage;
        this.maxDamage = maxDamage;
        this.experience = experience;
        this.lapse = lapse;
        this.unlocked = unlocked;
        this.requiredExperience = requiredExperience;
    }
}

//Ataques normales
let punietazo = new normalAttacks("Puñetazo", 20);
let patada = new normalAttacks("Patada", 25);
let cabezazo = new normalAttacks("Cabezazo", 30);
let placaje = new normalAttacks("Placaje", 50);

//Ataques de defensa
let parar = new defenseAttacks("Parar", "Reduce el daño de ataque enemigo al 50%");
let bloquear = new defenseAttacks("Bloquear", "Reduce el daño de ataque enemigo a 50 ptos");
let esquivar = new defenseAttacks("Esquivar", "Da una probabilidad del 75% de que el ataque enemigo falle");

//Ataques del tipo
//Ataques del tipo fuego
let ascuas = new typeAttacks("Ascuas", "Fuego", 30, 75, 150, 50, 3, true, 0);
let lanzaLlamas = new typeAttacks("Lanza Llamas", "Fuego", 50, 100, 200, 75, 4, false, 75);
let pulsoDragon = new typeAttacks("Pulso Dragón", "Fuego", 75, 150, 300, 100, 5, false, 200);
//Ataques del tipo agua
let chorroAgua = new typeAttacks("Chorro de Agua", "Agua", 30, 75, 150, 50, 3, true, 0);
let hidroChorro = new typeAttacks("Hidrochorro", "Agua", 50, 100, 200, 75, 4, false, 75);
let hidroBomba = new typeAttacks("Hidro Bomba", "Agua", 75, 150, 300, 100, 5, false, 200);
//Ataques del tipo planta
let latigoCepa = new typeAttacks("Látigo Cepa", "Agua", 30, 75, 150, 50, 3, true, 0);
let hojasNavaja = new typeAttacks("Hojas Navaja", "Agua", 50, 100, 200, 75, 4, false, 75);
let rayoSolar = new typeAttacks("Rayo Solar", "Agua", 75, 150, 300, 100, 5, false, 200);

//Instancias de las clases

let ashi = new Character("Ashi", "/assets/img/ashi-complete.png", "/assets/img/ashi-head.png");
let mistery = new Character("Mistery", "/assets/img/mistery-complete.png", "/assets/img/mistery-head.png");
let ruck = new Character("Ruck", "/assets/img/ruck-complete.png", "/assets/img/ruck-head.png");

let flamander = new Mokepon(
    "Flamander",
    "/assets/img/flamander-1-complete.png",
    "/assets/img/flamander-1-head.png",
    1000,
    0,
    "fire"
);
flamander.typeAttacks.push(ascuas, lanzaLlamas, pulsoDragon);
