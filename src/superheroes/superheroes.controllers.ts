import { Controller, Get, Post} from "@nestjs/common";
import { SuperheroesService } from "./superheroes.service";

@Controller('/superheroes')
export class SuperheroesControllers{

    constructor(private superheroesService:SuperheroesService){
    }
    @Get()
    getAllSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }

    @Post()
    createSuperhero() {
        return this.superheroesService.createSuperhero();
    }
}