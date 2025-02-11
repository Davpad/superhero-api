import { Injectable } from "@nestjs/common";

export interface Superhero {
    name: string;
    superpower: string;
    humility_score: number;
}

@Injectable()
export class SuperheroesService{
    
    getSuperheroes() {
    }

    createSuperhero(superhero:Superhero) {
        
        if (superhero.humility_score > 10){
            return "Superheroes' humility score can't be higher than 10. Superheroes are still humans!"
        }
        console.log(superhero);
        
    }
}