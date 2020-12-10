import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ClassType } from "class-transformer/ClassTransformer";
import { Page } from "../entities/page";
// import { pluralize } from "sequelize/types/lib/utils";
import { RequestModelQuery } from "../entities/RequestModel";
import { ResponseModel } from "../entities/ResponseModel";
import { ServiceOperationResultType } from "../entities/ServiceOperationResultType";
import { createConnection, EntitySchema, getRepository, ObjectType, Repository } from "typeorm";
import { DtoBase } from "../entities/DtoBase";
import { EntityBase } from "../entities/EntityBase";
const objectMapper = require('object-mapper');
var pluralize = require('pluralize')

@Injectable()
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase>{
   
  private entityMap = {};
  private dtoMap = {};

  private entityToDtoMap = {};

  private dtoToEntitymap = {};
  // private type: ObjectType<TEntity>;
  
  constructor(private readonly genericRepository: Repository<TEntity>, private type3: ObjectType<TEntity>,entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
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
    try {
      await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
      const result: TEntity[] = [];
    
      let result1: any;
      entity.forEach(async (entity_sample) => {
        console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        console.log("result....." + objectMapper(entity_sample, this.entityMap));
      
        result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
      
        await result.push(result1)
        await console.log("present result is......" + JSON.stringify(result));
      })
      await console.log("Returning result1....." + JSON.stringify(result));
      return result;
    }
    catch (error){
      console.log("Error occured while insering groups....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
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

  public async findAll(type:ObjectType<TEntity>,type1: ClassType<TDto>, requestModel: RequestModelQuery):
    Promise<ResponseModel<TDto>> {

    let orderby = 'ASC';
    let orderbyField = 'Id';
    //Prepare the Query considering the pageInfo if there else without it
    if (requestModel != null && requestModel.Filter != null) {
      orderby = !requestModel.Filter.IsOrderByFieldAsc ? 'DESC' : orderby;
      orderbyField = requestModel.Filter.OrderByField != null ? requestModel.Filter.OrderByField : orderbyField;
    };

    var data = this.type3.toString().substr(9, 30).toLowerCase();
    let final_data = "";
    let i = 0;
    // let temp = async () => {
    while (data[i] != "(") {
      final_data += data[i];
      i++;
    };
    //This is the plural form of the entity
    let final_data_pluralized = pluralize(final_data, 0);
    let final_data_singularized = final_data;

    let queryable = await this.genericRepository.createQueryBuilder(final_data_singularized);

    //evaluating the children and building the query
    if (requestModel.Children != null && requestModel.Children.length > 0) {
      //evaluating joins based on children.
      switch (requestModel.Children.length) {
        case 1:
          //employee --> singular
          //employees --> plural

          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[0], 0), pluralize(requestModel.Children[0], 1));

          break;
        case 2:
          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[0], 0), pluralize(requestModel.Children[0], 1));
          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[1], 0), pluralize(requestModel.Children[1], 1));

          break;
        case 3:
          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[0], 0), pluralize(requestModel.Children[0], 1));
          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[1], 0), pluralize(requestModel.Children[1], 1));
          queryable = queryable.leftJoinAndSelect(pluralize(requestModel.Children[2], 0), pluralize(requestModel.Children[2], 1));

          break;
        
      }
    };

    //Evaluating the where condition and joining on query.
    if (requestModel.Filter.Conditions != null && requestModel.Filter.Conditions.length > 0) {
      let iCount = 0;
      let conditionBuilder = ' Where ';
      for (let i = 0; i < requestModel.Filter.Conditions.length; i++) {
        if (iCount > 0) {
          conditionBuilder += ' and ';
        }
        conditionBuilder += requestModel.Filter.Conditions[i].FieldName;
        //TODO : handle other operators like 'Like', 'Greater Than', Lesser thant etc'
        conditionBuilder += ' = ';
        let quoteSymbol = (typeof requestModel.Filter.Conditions[i].FieldValue == 'number') ? "" : "'";

        //TODO: check the other data type of the value , if integer then do not append "'" else append "'"
       //Guess for datetime we need to do some convertion
        
        conditionBuilder += quoteSymbol + requestModel.Filter.Conditions[i].FieldValue + quoteSymbol;

        iCount++;
      };
      queryable = queryable.where(conditionBuilder);

    };

    //getting the total count of records as per all conditions except the pagination 
    let totalRecords = queryable.getCount();

    //evaluating and putting the pagination if applicable or passed
    if (requestModel.Filter.PageInfo != null) {
      
      queryable = queryable.skip((requestModel.Filter.PageInfo.PageSize) *
        (requestModel.Filter.PageInfo.PageNumber - 1))
        .take(requestModel.Filter.PageInfo.PageSize);
    };

    //Building the finale Query with getMany()
   
    let result_temp_values = queryable.getMany();

    result_temp_values.then(t => {
      let x = t.length;
      //t.entries
    });
   
    //Mapping to convert  entities to dtos
    let dtos = new Array<TDto>();
    
    let responseModel = new ResponseModel<TDto>(requestModel.RequestGuid,
      dtos,
      ServiceOperationResultType.success, '', '', '', null);



    let children: Array<string> = requestModel.Children;
    let pageInfo: Page = requestModel.Filter.PageInfo;
  
    return responseModel;
  };
}