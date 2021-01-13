import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ClassType } from "class-transformer/ClassTransformer";
import { Page } from "../submodules/platform-3.0-Common/common/page";
// import { pluralize } from "sequelize/types/lib/utils";
// import { RequestModelQuery } from "../submodules/platform-3.0-Common/common/RequestModel";
import { ResponseModel } from "../submodules/platform-3.0-Common/common/ResponseModel";
import { ServiceOperationResultType } from "../submodules/platform-3.0-Common/common/ServiceOperationResultType";
import { createConnection, EntitySchema, getRepository, ObjectType, Repository, SelectQueryBuilder } from "typeorm";
import { DtoBase } from "../submodules/platform-3.0-Common/common/DtoBase";

import { RequestModelQuery } from "../submodules/platform-3.0-Common/common/RequestModelQuery";
import { RequestModel } from "../submodules/platform-3.0-Common/common/RequestModel";
import { plainToClass } from "class-transformer";
import { HttpService } from "@nestjs/common";
import { map } from 'rxjs/operators';
// import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USERNAME, GROUP_MICROSERVICE_URI } from '../../../config';
import { ConditionalOperation } from "../submodules/platform-3.0-Common/common/conditionOperation";
import { EntityBase } from "../EntityBase/EntityBase";
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
  public sns_sqs: any;

  // private group_add_publish_topics = [];
  // private group_add_subscribe_topics = [];
  // private group_update_publish_topics = [];
  // private group_update_subscribe_topics = [];
  // private group_delete_publish_topics = [];
  // private group_subscribe_publish_topics = [];

  // private type: ObjectType<TEntity>;
  
  constructor(public http:HttpService,private readonly genericRepository: Repository<TEntity>, private type3: ObjectType<TEntity>,private entityClassType:ClassType<TEntity>,private dtoClassType:ClassType<TDto>,entityMap: Record<string, unknown>, dtoMap: Record<string, unknown>, entityToDtoMap: Record<string, unknown>, dtoToEntityMap: Record<string, unknown>) {
    this.entityMap = entityMap;
    this.dtoMap = dtoMap;
    this.entityToDtoMap = entityToDtoMap;
    this.dtoToEntitymap = dtoToEntityMap;
    // this.sns_sqs = SNS_SQS.getInstance();
    
  }
  




//   getTenantId(communityUrl: string): any{
    
//     const headersRequest = {
//       'Content-Type': 'application/json',
//       'Authorization': `Basic `+communityUrl,
//   };
//     console.log("Inside Tenant Id......uri is....." + GROUP_MICROSERVICE_URI + "/tenant/" + communityUrl);
//     if (!cache.get(communityUrl))
//     {
//       return this.http.get(GROUP_MICROSERVICE_URI + "/tenant"+ "/" + communityUrl,{ headers: headersRequest })
//       .pipe(
//         map(response => {
//           cache.set(communityUrl, response.data );
//           response.data
//         })
//       );
//     }
//     else{
//       console.log("dict is......" + this.dict);
//       return cache.get(communityUrl);
//     }
   
// }
  
  
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
      let result: TDto[] = [];
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
      let result: TEntity[] = [];
      let entity: TEntity;
      
      Promise.all(dtos.map(async (dto: TDto) => {
                await result.push(plainToClass(this.entityClassType,objectMapper(dto,this.entityToDtoMap)))
      }))


      return result;
    }
    catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getByIds(id: any[]): Promise<ResponseModel<TDto>>{
    try {
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null,null,null);
      console.log("ids...." + JSON.stringify(id));
      final_result.setDataCollection(await this.mapToDto(await this.genericRepository.findByIds(id)))
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      // throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new Error(error);
    }
    
  }

  async getAll(): Promise<ResponseModel<TDto>> {
    try {
      let result = await this.genericRepository.find();

      
      let final_result: ResponseModel<TDto> = new ResponseModel("123", null, null, "123", "123", "gft", null,null,null);
      console.log("result is....." + JSON.stringify(result));
      final_result.setDataCollection(await this.mapToDto(result));
      return final_result;
    }
    catch (error) {
      console.log("Error is....." + error);
      // throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new Error(error);
    }
  }

  async create(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside insert of generic repository...entity is...." + JSON.stringify(entity));
      var result: TDto[] = [];
    
      let result1: any;
      //entity
      let requestGuid = entity.RequestGuid;
      let socketId = entity.SocketId;

      //Add implicit filter toeach record in the dataCollection via Filters.
      //----------------------------------------------------------------
      /*
      {
        "field1":"ssome value",
        "community_id"= <community_id from cache/request object> only if the property has community_id
        //This has to be level wise, for level 1 you will get it directly
        //Here we are adding implicit filter for every record that goes inside the DB
      }

      */
     
      // let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,entity.SocketId, null, null, "123", "123", "gft", null);
      
      await Promise.all(entity.DataCollection.map(async (entity_sample) => {
        // console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        // console.log("result....." + objectMapper(entity_sample, this.entityMap));
      
        result1 = await this.genericRepository.save(objectMapper(entity_sample, this.entityMap))
        console.log("result is......." + JSON.stringify(result1));
        // result1 = await this.genericRepository.save(entity_sample)
      
        await result.push(result1)
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      console.log("Returning result1....." + JSON.stringify(result));
      // result.forEach((entity:TEntity)=>)
      // let successResponseModel = ResponseModel<TDto>
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.success,"200",null,null,null,entity.SocketId,entity.CommunityUrl)
      final_result.setDataCollection(result);
      final_result.setSocketId(entity.SocketId);
      return final_result;
      
      
    }
    catch (error){
      console.log("Error occured while inserting groups....." + error);
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.error,"500",null,null,null,entity.SocketId,entity.CommunityUrl)

      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
  }

  async deleteById(ids: any[]): Promise<ResponseModel<TDto>> {
    const entities = await this.getByIds(ids);
    console.log("Entites to be deleted are......" + JSON.stringify(entities));
    
    if (entities.getDataCollection().length != 0) {
      let result = await this.mapToEntity(entities.getDataCollection());
      console.log("Result is....." + JSON.stringify(result));
      await this.genericRepository.remove(result);
      let final_result:ResponseModel<TDto> = new ResponseModel(null,null,null,"200",null,null,null,null,null)

      final_result.setDataCollection(entities.getDataCollection())
      return final_result;
    }
    // return await this.genericRepository.remove(ids)
    throw new HttpException("No such id found ", HttpStatus.NOT_FOUND);
  }

  async updateEntity(dtos: RequestModel<TDto>): Promise<ResponseModel<TDto>>{
    try {
      await console.log("Inside update of generic repository...entity is...." + JSON.stringify(dtos));
      var result: TDto[] = [];
      var ids: number[] = [];
      let result1: any;
      var result2: any;
      var entities: TEntity[] = [];
      await Promise.all(dtos.DataCollection.map(async (dto_sample:any) => {
        // console.log("Entity sample is......" + JSON.stringify(entity_sample));
        console.log("Map is......" + JSON.stringify(this.entityMap));
        // console.log("result....." + objectMapper(entity_sample, this.entityMap));
        await entities.push(objectMapper(dto_sample, this.entityMap));
        result1 = await this.genericRepository.update(dto_sample.Id, dto_sample);
        // result2 = await this.genericRepository.merge()
        // const entity = await this.genericRepository.findOne(dto_sample.Id);
        // result1 = this.genericRepository.save(id:dto_sample.id, ...dto_sample);
        await result.push(result1);
        console.log("result is......." + JSON.stringify(result1));
        await console.log("present result is......" + JSON.stringify(result));
      })
      );
      let final_result:ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid,null,ServiceOperationResultType.success,"200",null,null,null,dtos.SocketId,dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      return final_result;
      
    }
    catch (err)
    {
      let final_result:ResponseModel<TDto> = new ResponseModel(dtos.RequestGuid,null,ServiceOperationResultType.failure,"500",null,null,[err],dtos.SocketId,dtos.CommunityUrl)
      final_result.setDataCollection(dtos.DataCollection);
      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  // TODO :- refractor parametres........
  async deleteByIds(entity: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
    try {
      await console.log("Inside delete of generic repository...entity is...." + JSON.stringify(entity));
      var result: TDto[] = [];
    
      let result1: any;
      //entity
      const entities = await this.getByIds(entity.DataCollection)
     
      // let final_result: ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,entity.SocketId, null, null, "123", "123", "gft", null);
      
      this.genericRepository.remove(await this.mapToEntity(entities.getDataCollection()));
      console.log("Returning result1....." + JSON.stringify(result));
      // result.forEach((entity:TEntity)=>)
      // let successResponseModel = ResponseModel<TDto>
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.success,"200",null,null,null,entity.SocketId,entity.CommunityUrl)
      final_result.setDataCollection(entities.getDataCollection());
      return final_result;
      
      
    }
    catch (error){
      console.log("Error occured while inserting groups....." + error);
      let final_result:ResponseModel<TDto> = new ResponseModel(entity.RequestGuid,null,ServiceOperationResultType.error,"500",null,null,null,entity.SocketId,entity.CommunityUrl)

      throw new HttpException(final_result, HttpStatus.INTERNAL_SERVER_ERROR);
    };
    
  }



  // async updateById(entities: TEntity[]): Promise<TEntity[]> {
  //   this.genericRepository.createQueryBuilder("Entity").
  //   entities.forEach((entity_sample: TEntity) => {
  //     this.genericRepository.findByIds([entity_sample.Id]).then(responseGet => try {
        
  //     })
  //   })
  //  }

  public async search(requestModel: RequestModelQuery): Promise<ResponseModel<TDto>> {
    try {
      console.log("Inside Search baby......requestModel is...." + JSON.stringify(requestModel));
      let orderBy = 'ASC';
      let orderByField = 'Id';
      let isCaseInsensitiveSearch = false;
      if (requestModel != null && requestModel.Filter != null) {
        orderBy = !requestModel.Filter.IsOrderByFieldAsc ? 'DESC' : orderBy;
        orderByField = requestModel.Filter.OrderByField != null ? requestModel.Filter.OrderByField : orderByField;

      }

      console.log("requestmodel.children is....." + requestModel.Children)

      let queryField = this.genericRepository.createQueryBuilder(requestModel.Children[0])
      // let result123 = await this.genericRepository.query('SELECT COUNT(DISTINCT("groupUser"."id")) AS "cnt" FROM "groupUsers" "groupUser" INNER JOIN "users" "user" ON "user"."id"="groupUser"."user_id"  INNER JOIN "groups" "group" ON "group"."id"="groupUser"."group_id" WHERE "groupUser"."group_image"=\'groupImage2\'');

      if (requestModel.Children != null && requestModel.Children.length > 0) {
        for (let i = 1; i < requestModel.Children.length; i++) {
          queryField = queryField.innerJoinAndSelect(requestModel.Children[0] + "." + requestModel.Children[i], requestModel.Children[i]);
        }
      }
      // console.log("After passing children.....queryField is....." + queryField.getSql());
      // console.log("1st half query result is........" + queryField.getMany());
      console.log("Length is...." + requestModel.Filter.Conditions.length + "\n\n\n\n\n\n\n");
      let i = 0;
      if (requestModel.Filter.Conditions != null && requestModel.Filter.Conditions.length > 0) {
        i = requestModel.Filter.Conditions.length;
        let str: string = "";
        // str += "entity." + requestModel.Filter.Conditions[i].FieldName + "=:" + requestModel.Filter.Conditions[i].FieldName + JSON.stringify(requestModel.Filter.Conditions[i]);
        // if (typeof (requestModel.Filter.Conditions[0].FieldValue) == typeof ('')) {
        //   console.log(requestModel.Filter.Conditions[0].FieldValue + ".........................is a string");
        //   requestModel.Filter.Conditions[0].FieldValue.replace(/'/g, '"');
        //   console.log(requestModel.Filter.Conditions[0].FieldValue)
        // }
        let myJSON = {}
        // myJSON[requestModel.Filter.Conditions[0].FieldName] = requestModel.Filter.Conditions[0].FieldValue;
        myJSON['fieldName'+0] = requestModel.Filter.Conditions[0].FieldValue;
        console.log("Myjson init is......" + JSON.stringify(myJSON));
        if (requestModel.Filter.Conditions[0].FieldName.indexOf('.') > -1) {
          console.log("1st taking 1 ....." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
        }
        else {
          console.log("Myjson init 2 ......." + requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
        }
        console.log("\n\n\n\n\nBefore entering second condition.....query generated is........" + queryField.getQuery() + "\n\n\n\n\n\n\n\n\n\n");
        let str1 = '';
        for (i = 1; i < requestModel.Filter.Conditions.length; i++) {
          if (requestModel.Filter.Conditions[i].FieldName.indexOf('.') > -1)
            str1 = requestModel.Filter.Conditions[i].FieldName
            
          else
            str1 = requestModel.Children[0] + "." + requestModel.Filter.Conditions[i].FieldName
          console.log("hiiii.........");
          console.log(requestModel.Filter.Conditions[i]);
          console.log("All conditions are..........." + JSON.stringify(requestModel.Filter.Conditions));
          console.log("\n\nrequestModel.Filter.Conditions[i-1].ConditionalSymbol is...." + requestModel.Filter.Conditions[i - 1].ConditionalSymbol);
          console.log("type is......" + typeof (requestModel.Filter.Conditions[i - 1].ConditionalSymbol));
          console.log("ConditionalOperation.Or is........." + ConditionalOperation.Or);
          console.log(" type of ConditionalOperation.Or...................." + ConditionalOperation.Or + "\n\n\n\n\n");
        
          if (requestModel.Filter.Conditions[i-1].ConditionalSymbol == ConditionalOperation.Or) {
            let myJSON = {};
            // `%${ requestModel.Filter.Conditions[i].FieldValue }%`
            myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            console.log("\n\n\n\nMyjson1 is......" + myJSON);
            let str: string = "";
            // queryField = queryField.orWhere(str1 + "=:fieldName" + i, myJSON);
            queryField = queryField.orWhere(str1 + " LIKE :fieldName"+i, myJSON);
          }
          else {
            let myJSON = {};
            myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            let str: string = "";
            console.log("\n\n\n\nMyjson2 is......" + JSON.stringify(myJSON));
            // queryField = queryField.andWhere(str1+ "=:fieldName"+i , myJSON);
            queryField = queryField.andWhere(str1+ " LIKE :fieldName"+i , myJSON);
          }
        }
      
      }
      let totalRecords = queryField.getCount();
      console.log("totalRecords is....." + JSON.stringify(totalRecords));
      if (requestModel.Filter.PageInfo != null) {
        queryField = queryField.skip((requestModel.Filter.PageInfo.PageSize) *
          (requestModel.Filter.PageInfo.PageNumber - 1))
          .take(requestModel.Filter.PageInfo.PageSize);
      }
      // if (requestModel.Filter.PageInfo != null) {
      //   queryField= queryField.
      //     take(19);
      // }
    
      console.log("Final Ultimate Query is.................." + queryField.getSql());
      let result: any = await queryField.getMany();
      let final_result: ResponseModel<TDto> = new ResponseModel(requestModel.getRequestGuid(), null, ServiceOperationResultType.success, "200", null, null, null, null, null)
      console.log("Setting result......")
      await final_result.setDataCollection(result);
      console.log("Final_result is......" + JSON.stringify(final_result));
      
      console.log("\n\n\n\n\nresult1 is....." + JSON.stringify(result));
      return final_result;
    }
    catch (err) {
      console.log("Error is......." + JSON.stringify(err));
      let final_result: ResponseModel<TDto> = new ResponseModel(requestModel.getRequestGuid(), null, ServiceOperationResultType.error, "500", null, null, null, null, err)

      throw final_result;
    };
    
  }
  

  




  // public async getRequestModelByDto(requestModel: RequestModel<TDto>, userInfoDto: UserDto): Promise<RequestModel<TDto>> {

  //   if (userInfoDto == null)
  //     return requestModel;
    

  //   if (typeof (requestModel) === 'GROUP') {
  //     public requ
      
  //   }

  // };

  // public async getGroupRequestModel(): Promise<any> {
  //   try {
  //     let children = ["community"];
  //     let queryField = this.genericRepository.createQueryBuilder().select("entity").from(this.entityClassType, "entity");
  //     queryField = queryField.innerJoinAndSelect("entity.community", "community").select(["community.Id"]);
  //     console.log("sql query for group is......" + queryField.getSql());
  //   }
  //   catch (err) {
  //     console.log("Error is......" + err);
  //   }

  //   return null;
  // }

  public async getRequestModel(children: string[], id: number): Promise<any>{
    let cache_id: string = children[0] + id;
    if (!cache.get(cache_id))
    {
      let result: [] = await this.getParentId(children, id);
      if(result.length != 0)
      cache.set(cache_id, result);
      return result;
    }
    else{
      // console.log("dict is......" + this.dict);
      return cache.get(cache_id);
    }
  }

  public async getParentId(children: string[],id:number): Promise<any>{
    try {

      console.log("Children is....." + children);
      // let queryField = this.genericRepository.createQueryBuilder().select("entity").from(this.entityClassType, "entity");
      let queryField = this.genericRepository.createQueryBuilder(children[0]);
      //let result3 = queryField.getMany();
     // console.log("Result is....." + JSON.stringify(result3));
      let length_of_array = children.length;
      if (length_of_array != 0) {
        // children.unshift("groupUser");
        // console.log("After unshift....children is....." + children);
        for (let i = 0; i < children.length-1; i++) {
          queryField.innerJoinAndSelect(children[i] + "." + children[i+1], children[i+1])
          // console.log("query inside loop...."+queryField.getSql())
        }
      };
      

     // let result1: any = await queryField.getMany();
     // console.log("result1 is............" + JSON.stringify(result1));
      // queryField = queryField.select([children[length_of_array] + ".Id"]);
      // console.log("sql query for GenericEntity is......" + queryField.getSql());
      let myJSON = {};
      myJSON['Id'] = id;

      //queryField = queryField.where("group_user.id=1");
      // queryField.where(children[0] + ".id=:Id", myJSON);
      queryField.where(children[0]+".id=:Id",myJSON);
      // queryField.addSelect("user.community_id");
      queryField.addSelect(children[length_of_array - 1] + ".id");
      // console.log("sql query for GenericEntity  2 is......" + queryField.getSql());
      // let result:any = await queryField.select(["user.community_id"]).where("groupUser.id=:Id", myJSON).distinct().getMany();
      //let result: any = await queryField.select["user.community_id"].where("group_user.id=:Id", myJSON).distinct().getMany();
      let result: any = await queryField.getMany(); //  await queryField.select["\"user\".community_id"];
      // console.log("\n\n\n\nbabayyyy......." + result["communityId"])
      // console.log(typeof (result));
      // console.log("Result is....12345.........." + JSON.stringify(result[0].user.community.Id));
      // let result2: any = await queryField.where("groupUser.Id=:Id", myJSON).getMany();
      // console.log("\n\n\n\nMy Fav Result is....." + JSON.stringify(result2)+"\n\n\n\n\n");

      // console.log("Current resultr is......."+JSON.stringify(result.user.communityId));
      // await console.log("Result123 is...." +JSON.stringify(JSON.parse(result)));
      return result;
      
    }
    catch (err) {
      console.log("Error occurred in Generic GetRequestModel......", JSON.stringify(err));
      // console.log("Err..........", Object.values(err[1]));
      this.iterate(err['message'][56], '')
//      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      throw new Error(err);
    }
  }

  public iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                this.iterate(obj[property], stack + '.' + property);
            } else {
                console.log(property + "   " + obj[property]);
                
            }
        }
    }
}



  public async getChannelGroupRequestModel(): Promise<any>{
    try {
      let children = ["group", "community"];
      let queryField = this.genericRepository.createQueryBuilder("groupUser")
      queryField = queryField.leftJoinAndSelect("groupUser.group", "group")
        .leftJoinAndSelect("group.community", "community").select(["community.Id"]);
      console.log("sql query for channelGroup is......" + queryField.getSql());
      let result:any = await queryField.where("groupUser.Id=:Id", { Id: 1 }).distinct().getOneOrFail();
      console.log("Result is....."+JSON.stringify(result))
      return result;
    }
    catch (err) {
      console.log("Error is......" + err);
    }
    return null;
  }

  public async getUserRequestModel(): Promise<any>{
    try {
      let children = ["community"];
      let queryField = this.genericRepository.createQueryBuilder().select("entity").from(this.entityClassType, "entity");
      queryField = queryField.innerJoinAndSelect("entity.community", "community").select(["community.Id"]);
      console.log("sql query for user is......" + queryField.getSql());
    }
    catch (err) {
      console.log("Error is......" + err);
    }
  }



}