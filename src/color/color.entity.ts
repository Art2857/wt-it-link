import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('v_color')
@ObjectType()
export class Color {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  c_name: string;

  @Column()
  @Field({ nullable: true })
  c_hex: string;

  @Column()
  @Field({ nullable: true })
  c_rgb: string;

  // Не уверен что стоит хранить в бд, можно доставать только когда нужно:
  //   @Field({ nullable: true })
  //   @Expose() // import { Expose } from 'class-transformer';
  //   get c_rgb(): string {
  //     const hex = this.c_hex.replace('#', '');
  //     const bigint = parseInt(hex, 16);
  //     const r = (bigint >> 16) & 255;
  //     const g = (bigint >> 8) & 255;
  //     const b = bigint & 255;
  //     return `rgb(${r}, ${g}, ${b})`;
  //   }
}
