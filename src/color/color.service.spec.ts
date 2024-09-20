import { Test, TestingModule } from '@nestjs/testing';
import { ColorService } from './color.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Color } from './color.entity';

describe('ColorService', () => {
  let service: ColorService;
  let repository: Repository<Color>;

  const mockColorRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ColorService,
        {
          provide: getRepositoryToken(Color),
          useValue: mockColorRepository,
        },
      ],
    }).compile();

    service = module.get<ColorService>(ColorService);
    repository = module.get<Repository<Color>>(getRepositoryToken(Color));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of colors', async () => {
      const result: Color[] = [
        { id: 1, c_name: 'Red', c_hex: '#FF0000', c_rgb: 'rgb(255, 0, 0)' },
        { id: 2, c_name: 'Blue', c_hex: '#0000FF', c_rgb: 'rgb(0, 0, 255)' },
      ];

      mockColorRepository.find.mockResolvedValue(result);

      // Выполняем метод сервиса
      expect(await service.findAll()).toEqual(result);
      // Проверяем, что метод find был вызван
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findPaginated', () => {
    it('should return a paginated array of colors', async () => {
      const result: Color[] = [
        { id: 1, c_name: 'Green', c_hex: '#00FF00', c_rgb: 'rgb(0, 255, 0)' },
        {
          id: 2,
          c_name: 'Yellow',
          c_hex: '#FFFF00',
          c_rgb: 'rgb(255, 255, 0)',
        },
      ];

      const page = 1;
      const limit = 10;

      mockColorRepository.find.mockResolvedValue(result);

      // Выполняем метод сервиса
      expect(await service.findPaginated(page, limit)).toEqual(result);
      // Проверяем, что метод find был вызван с правильными параметрами
      expect(repository.find).toHaveBeenCalledWith({
        skip: (page - 1) * limit,
        take: limit,
      });
    });
  });

  describe('findByName', () => {
    it('should return a color by name', async () => {
      const result: Color = {
        id: 1,
        c_name: 'Purple',
        c_hex: '#800080',
        c_rgb: 'rgb(128, 0, 128)',
      };

      const name = 'Purple';

      mockColorRepository.findOne.mockResolvedValue(result);

      // Выполняем метод сервиса
      expect(await service.findByName(name)).toEqual(result);
      // Проверяем, что метод findOne был вызван с правильным условием
      expect(repository.findOne).toHaveBeenCalledWith({
        where: { c_name: name },
      });
    });

    it('should return null if color not found', async () => {
      const name = 'NonExistingColor';

      mockColorRepository.findOne.mockResolvedValue(null);

      // Выполняем метод сервиса
      expect(await service.findByName(name)).toBeNull();
      // Проверяем, что метод findOne был вызван с правильным условием
      expect(repository.findOne).toHaveBeenCalledWith({
        where: { c_name: name },
      });
    });
  });
});
