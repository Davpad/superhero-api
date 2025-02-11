import { Body, Controller, Get, Post} from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";
import { Superhero } from "./superheroes.service";

@Controller('/superheroes')
export class SuperheroesControllers{

    constructor(private superheroesService:SuperheroesService){ //Calling the store and stablishing its type
    }
    @Get()
    getAllSuperheroes() {
        return this.superheroesService.getSuperheroes(); //Calling the get function from superheroesService
    }

    @Post()
    createSuperhero(@Body() superhero:Superhero) { //Stablishing the type of the body that is being posted
     
        
        return this.superheroesService.createSuperhero(superhero); //Calling the post function from superheroesService
    }
}