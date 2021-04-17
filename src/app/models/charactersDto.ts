export class CharactersDto {
    name: string = "";
    species: string = "";
    gender: string = "";
    house: string = "";
    dateOfBirth: string = "";
    yearOfBirth: number = 0;
    ancestry: string = "";
    eyeColour: string = "";
    hairColour: string = "";
    wand: Wand = new Wand;
    patronus: string = "";
    hogwartsStudent: Boolean = true;
    hogwartsStaff: Boolean = true;
    actor: string = "";
    alive: Boolean = true;
    image: string = "";
}
export class Wand{
        wood: string = "";
        core: string = "";
        length: number = 0;
}