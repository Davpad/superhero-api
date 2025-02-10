import { Injectable } from "@nestjs/common";

@Injectable()
export class SuperheroesService{
    
    getSuperheroes(){
        return 'These are your heroes'
    }
}