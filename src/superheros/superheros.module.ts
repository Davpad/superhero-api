import { Module } from "@nestjs/common";
import { SuperherosControllers } from "./superheros.controllers";

@Module({
    controllers:[SuperherosControllers],
})
export class SuperherosModules{}