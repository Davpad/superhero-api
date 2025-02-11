import { Injectable } from "@nestjs/common";

export interface Superhero { //The interface of the Superhero object, where I specify the types of the diferent elements.
    name: string;
    superpower: string;
    humility_score: number;
}

@Injectable()
export class SuperheroesService{ //Inside this class are stored the functions and stores of the API
    
    private superheroes : Superhero[] = [] //All the superheroes are stored locally in this array

    getSuperheroes() {
       return this.superheroes.sort((a, b)=> a.humility_score < b.humility_score? -1 : 1) //I'm returning a sorted version of the superheroes array, in ascending order of the humility score.
    }

    createSuperhero(superhero: Superhero) {
        
        if (superhero.humility_score > 10){
            return "Superheroes' humility score can't be higher than 10. Superheroes are still humans!" //This apply a conditional to evaluate if the humility score is higher than 10, if so it returns a message telling it can't be higher than 10.
        }

        this.superheroes.push(superhero)
        return this.superheroes;
        
    }
}