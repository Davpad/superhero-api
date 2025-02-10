import { Module } from '@nestjs/common';
import { SuperherosModules } from './superheroes/superheroes.module';

@Module({
  imports: [SuperherosModules],
})
export class AppModule {}
