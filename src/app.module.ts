import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ColorModule } from './color/color.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => AppDataSource.options }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), '/schemas/color.schema.gql'),
    }),
    ColorModule,
  ],
})
export class AppModule {}
