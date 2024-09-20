import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorService } from './color.service';
import { ColorResolver } from './color.resolver';
import { Color } from './color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  providers: [ColorService, ColorResolver],
})
export class ColorModule {}
