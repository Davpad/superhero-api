import { Module } from '@nestjs/common';
import { SuperherosModules } from './superheros/superheros.module';

@Module({
  imports: [SuperherosModules],
})
export class AppModule {}
