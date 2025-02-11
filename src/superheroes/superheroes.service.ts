import { Injectable } from "@nestjs/common";

export interface Superhero {
    name: string;
    superpower: string;
    humility_score: number;
}

@Injectable()
export class SuperheroesService{
    
    private superheroes : Superhero[] = []

    getSuperheroes() {
       return this.superheroes.sort((a, b)=> a.humility_score < b.humility_score? -1 : 1)
    }

    createSuperhero(superhero: Superhero) {
        
        if (superhero.humility_score > 10){
            return "Superheroes' humility score can't be higher than 10. Superheroes are still humans!"
        }

        this.superheroes.push(superhero)
        return this.superheroes;
        
    }
}