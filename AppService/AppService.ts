import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ClassType } from "class-transformer/ClassTransformer";
import { Page } from "../entities/page";
// import { pluralize } from "sequelize/types/lib/utils";
// import { RequestModelQuery } from "../entities/RequestModel";
import { ResponseModel } from "../entities/ResponseModel";
import { ServiceOperationResultType } from "../entities/ServiceOperationResultType";
import { createConnection, EntitySchema, getRepository, ObjectType, Repository } from "typeorm";
import { DtoBase } from "../entities/DtoBase";
import { EntityBase } from "../entities/EntityBase";
import { RequestModelQuery } from "../entities/RequestModelQuery";
import { RequestModel } from "../entities/RequestModel";
import { plainToClass } from "class-transformer";
import { HttpService } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USERNAME, GROUP_MICROSERVICE_URI } from '../../../config';
// const config = require("../../../config")
const objectMapper = require('object-mapper');
var pluralize = require('pluralize')
var LRU = require("lru-cache")
  , options = { max: 500
              , length: function (n, key) { return n * 2 + key.length }
              , dispose: function (key, n) { n.close() }
              , maxAge: 1000 * 60 * 60 }
  , cache = new LRU(options)
  , otherCache = new LRU(100) // sets just the max size

@Injectable()
export default class AppService<TEntity extends EntityBase, TDto extends DtoBase>{
   
  private entityMap = {};
  private dtoMap = {};

  private entityToDtoMap = {};

  private dtoToEntitymap = {};
  private dict = {};
  // private type: ObjectType<TEntity>;
  
  constructor(public http:HttpService,private readonly genericRepository: Repository<TEntity>, private type3: ObjectType<TEntity>,private entityClassType:ClassType<TEntity>,private dtoClassType:ClassType<TDto>,entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
    this.entityMap = entityMap;
    this.dtoMap = dtoMap;
    this.entityToDtoMap = entityToDtoMap;
    this.dtoToEntitymap = dtoToEntityMap;

  }

  getTenantId(communityUrl: string): any{
    
    const headersRequest = {
      'Content-Type': 'application/json',
      'Authorization': `Basic `+communityUrl,
  };
    console.log("Inside Tenant Id......uri is....." + GROUP_MICROSERVICE_URI + "/tenant/" + communityUrl);
    if (!cache.get(communityUrl))
    {
      return this.http.get(GROUP_MICROSERVICE_URI + "/tenant"+ "/" + communityUrl,{ headers: headersRequest })
      .pipe(
        map(response => {
          cache.set(communityUrl, response.data );
          response.data
        })
      );
    }
    else{
      console.log("dict is......" + this.dict);
      return cache.get(communityUrl);
    }
   
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

  async mapToDto(entities: TEntity[]): Promise<TDto[]>{
    try {
      let result: TDto[];
      let dto: TDto;
      Promise.all(entities.map(async (entity: TEntity) => {
        await result.push(plainToClass(this.dtoClassType,objectMapper(entity,this.entityToDtoMap)))
      }))
      
      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async mapToEntity(dtos: TDto[]): Promise<TEntity[]>{
    try {
      let result: TEntity[];
      let entity:TEntity;
      Promise.all(dtos.map(async (dto: TDto) => {
        await result.push(plainToClass(this.entityClassType,objectMapper(entity,this.entityToDtoMap)))
      }))

      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByIds(id: any[]): Promise<ResponseModel<TDto>>{
    try {
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null);
      console.log("ids...." + JSON.stringify(id));
      final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)))
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  async getAll(): Promise<ResponseModel<TDto>> {
    try {
      let result = await this.genericRepository.find();

      
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null);
      console.log("result is....." + JSON.stringify(result));
      final_result.setDataCollection(await this.mapToDto(result));
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
      var result: TDto[] = [];
    
      let result1: any;
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null);
      
      await Promise.all(entity.DataCollection.map(async (entity_sample) => {
        console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        console.log("result....." + objectMapper(entity_sample, this.entityMap));
      
        result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
        console.log("result is......." + JSON.stringify(result1));
        // result1 = await this.genericRepository.save(entity_sample)
      
        await result.push(result1)
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      console.log("Returning result1....." + JSON.stringify(result));
      // result.forEach((entity:TEntity)=>)
      final_result.setDataCollection(result);
      return final_result;
    }
    catch (error){
      console.log("Error occured while inserting groups....." + error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
  }

  async deleteById(ids: any[]): Promise<ResponseModel<TDto>> {
    const entities =  await this.getByIds(ids);
    let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null);

    if (entities.getDataCollection.length != 0) {
      let result = entities.getDataCollection();
      console.log("Result is....." + result);
      await this.genericRepository.remove(await this.mapToEntity(result));
      final_result.setDataCollection(entities.getDataCollection())
      return final_result;
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