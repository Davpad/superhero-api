import { Body, Controller, Get, Post} from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";
import { Superhero } from "./superheroes.service";
import { log } from "console";

@Controller('/superheroes')
export class SuperheroesControllers{

    constructor(private superheroesService:SuperheroesService){
    }
    @Get()
    getAllSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }

    @Post()
    createSuperhero(@Body() superhero:Superhero) {
     
        
        return this.superheroesService.createSuperhero(superhero);
    }
}