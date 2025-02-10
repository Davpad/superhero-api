import { Controller, Get, Post} from "@nestjs/common";
import { SuperheroesService } from "./superheroes.services";

@Controller('/superheroes')
export class SuperheroesControllers{
    superheroesService:SuperheroesService;

    constructor(superheroesService:SuperheroesService){
        this.superheroesService = superheroesService
    }
    @Get()
    getAllSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }

    @Post()
    createSuperhero() {

    }
}