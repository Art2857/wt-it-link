import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './color.entity';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  async findAll(): Promise<Color[]> {
    return this.colorRepository.find();
  }

  findPaginated(page: number, limit: number): Promise<Color[]> {
    return this.colorRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findByName(name: string): Promise<Color | null> {
    return this.colorRepository.findOne({ where: { c_name: name } });
  }
}
