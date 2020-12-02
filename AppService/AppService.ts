import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { Repository } from "typeorm";
import { DtoBase } from "../entities/DtoBase";
import { EntityBase } from "../entities/EntityBase";
const objectMapper = require('object-mapper');

@Injectable()
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase>{
   
  private entityMap = {};
  private dtoMap = {};

  private entityToDtoMap = {};

  private dtoToEntitymap = {};

  constructor(private readonly genericRepository: Repository<TEntity>, entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
    this.entityMap = entityMap;
    this.dtoMap = dtoMap;
    this.entityToDtoMap = entityToDtoMap;
    this.dtoToEntitymap = dtoToEntityMap;
  }

  
  addDtoMap(map: Record<string, unknown>) {
    this.entityMap = map;
  }
  addEntityMap(map: Record<string, unknown>) {
    this.dtoMap = map;
  }

  addEntityToDtoMap(map: Record<string, unknown>) {
    this.entityToDtoMap = map;
  }

  addDtoToEntityMap(map: Record<string, unknown>) {
    this.dtoToEntitymap = map;
  }


  getByIds(ids: any[]): Promise<TEntity[]> {
    return this.genericRepository.findByIds(ids);
  }

  getAll(): Promise<TEntity[]> {
    return this.genericRepository.find();
  }

  async create(entity: TEntity[]): Promise<TEntity[]> {
    await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
    const result: TEntity[] = [];
    let result1: any;
    entity.forEach(async (entity_sample) => {
      await console.log("Entity sample is......" + JSON.stringify(entity_sample));
      await console.log("Map is......" + JSON.stringify(this.entityMap));
      await console.log("result....." + objectMapper(entity_sample, this.entityMap));
      
      result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
      
      await result.push(result1)
      await console.log("present result is......" + JSON.stringify(result));
    })
    await console.log("Returning result1....." + JSON.stringify(result));
    return result;
  }

  async deleteById(ids: any[]): Promise<TEntity[]> {
    const entities: TEntity[] = await this.getByIds(ids);
    if (entities.length != 0) {
      await this.genericRepository.remove(entities);
      return entities;
    }
    // return await this.genericRepository.remove(ids)
    throw new HttpException("No such id found ", HttpStatus.NOT_FOUND);
  }

  // async updateById(entities: TEntity[]): Promise<TEntity[]> {
  //   this.genericRepository.createQueryBuilder("Entity").
  //   entities.forEach((entity_sample: TEntity) => {
  //     this.genericRepository.findByIds([entity_sample.Id]).then(responseGet => try {
        
  //     })
  //   })
  //  }
}