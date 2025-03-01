import { Module } from "@nestjs/common";
import { SuperheroesControllers } from "./superheroes.controllers";
import { SuperheroesService } from "./superheroes.service";

@Module({
    controllers:[SuperheroesControllers],
    providers:[SuperheroesService]
})
export class SuperherosModules{}