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

    createSuperhero() {
    }
}