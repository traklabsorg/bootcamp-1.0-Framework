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
import { Condition } from "../submodules/platform-3.0-Common/common/condition";
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
  
  
  

  private async createQueryByRequestModelQuery(requestModel: RequestModelQuery): Promise<SelectQueryBuilder<TEntity>>{
    try { 
      console.log("Inside createQueryByRequestModelQuery baby......requestModel is...." + JSON.stringify(requestModel));
      let orderBy = requestModel.Filter.IsOrderByFieldAsc==null?true:requestModel.Filter.IsOrderByFieldAsc;
      let orderByField = requestModel.Filter.OrderByField == null ? 'Id' : requestModel.Filter.OrderByField;
      
      console.log("\n\n\n\n\n\n\n\n\n\nOrderBy is......", orderBy);
      console.log("OrderByField is/................",orderByField,"\n\n\n\n\n\n\n\n\n\n")
      let isCaseInsensitiveSearch = false;
      if (requestModel != null && requestModel.Filter != null) {
        // let orderBy = requestModel.Filter.IsOrderByFieldAsc==null?'ASC':requestModel.Filter.IsOrderByFieldAsc;;
        // let orderByField = 

      }

      console.log("requestmodel.children is....." + requestModel.Children)


      console.log("here......12345");
      
      let queryField = this.genericRepository.createQueryBuilder(requestModel.Children[0]);
      // let x = queryField.getMany();
      // console.log("x is...."+JSON.stringify(x));
      
      // console.log("QueryField is,........"+JSON.stringify(queryField))
      // if (select != null) {
      //   console.log("\n\n\n\nelect != null.....................\n\n\n\n\n")
      //   queryField.addSelect("COUNT('groupUser.groupId')",'count_temp')
      // }
      // let result123 = await this.genericRepository.query('SELECT COUNT(DISTINCT("groupUser"."id")) AS "cnt" FROM "groupUsers" "groupUser" INNER JOIN "users" "user" ON "user"."id"="groupUser"."user_id"  INNER JOIN "groups" "group" ON "group"."id"="groupUser"."group_id" WHERE "groupUser"."group_image"=\'groupImage2\'');

      if (requestModel.Children != null && requestModel.Children.length > 0) {
        for (let i = 1; i < requestModel.Children.length; i++) {
          queryField = queryField.leftJoinAndSelect(requestModel.Children[0] + "." + requestModel.Children[i], requestModel.Children[i]);
        }
      }
      // console.log("After passing children.....queryField is....." + queryField.getSql());
      // console.log("1st half query result is........" + queryField.getMany());
      console.log("Length is...." + requestModel.Filter.Conditions.length + "\n\n\n\n\n\n\n");
      let i = 0;
      if (requestModel.Filter.Conditions != null && requestModel.Filter.Conditions.length > 0) {
        i = requestModel.Filter.Conditions.length;

        let myJSON = {}
        // myJSON[requestModel.Filter.Conditions[0].FieldName] = requestModel.Filter.Conditions[0].FieldValue;
        
        let fieldValue = requestModel.Filter.Conditions[0].FieldValue;
        console.log("Myjson init is......" + JSON.stringify(myJSON));
        if (requestModel.Filter.Conditions[0].FieldName.indexOf('.') > -1) {
          if (typeof (fieldValue) == typeof ('')) {
            myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
            queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName"+0, myJSON);
          }
          else {
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          }

        }
        else {
          if (typeof (fieldValue) == typeof ('')) {
            myJSON['fieldName' + 0] = `%${requestModel.Filter.Conditions[0].FieldValue}%`;
            queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + " LIKE :fieldName"+0, myJSON);
          }
          else {
            myJSON['fieldName' + 0] = requestModel.Filter.Conditions[0].FieldValue;
            queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          }
          // console.log("Myjson init 2 ......." + requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
          // queryField = queryField.andWhere(requestModel.Children[0] + "." + requestModel.Filter.Conditions[0].FieldName + "=:fieldName"+0, myJSON);
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
          let fieldValue: any = requestModel.Filter.Conditions[i].FieldValue;
          if (requestModel.Filter.Conditions[i-1].ConditionalSymbol == ConditionalOperation.Or) {
            let myJSON = {};
            if (typeof (fieldValue) == typeof ('')) {
              myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
              queryField = queryField.orWhere(str1 + " LIKE :fieldName"+i, myJSON);
            }
            else {
              myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
              queryField = queryField.orWhere(str1 + "=:fieldName"+i, myJSON);
            }
            // `%${ requestModel.Filter.Conditions[i].FieldValue }%`
            // myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            // console.log("\n\n\n\nMyjson1 is......" + myJSON);
            // // queryField = queryField.orWhere(str1 + "=:fieldName" + i, myJSON);
            // queryField = queryField.orWhere(str1 + " LIKE :fieldName"+i, myJSON);
          }
          else {
            let myJSON = {};
            if (typeof (fieldValue) == typeof ('')) {
              myJSON['fieldName' + i] = `%${requestModel.Filter.Conditions[i].FieldValue}%`;
              queryField = queryField.andWhere(str1 + " LIKE :fieldName"+i, myJSON);
            }
            else {
              myJSON['fieldName' + i] = requestModel.Filter.Conditions[i].FieldValue;
              queryField = queryField.andWhere(str1 + "=:fieldName"+i, myJSON);
            }
            // myJSON['fieldName'+i] = `%${ requestModel.Filter.Conditions[i].FieldValue }%`;
            // console.log("\n\n\n\nMyjson2 is......" + JSON.stringify(myJSON));
            // // queryField = queryField.andWhere(str1+ "=:fieldName"+i , myJSON);
            // queryField = queryField.andWhere(str1+ " LIKE :fieldName"+i , myJSON);
          }
        }
      }
      // if (select != null) {
        // return queryField.select(['groupUser.Id', "COUNT('groupUser.Id')"])
        // return queryField.select([ "COUNT('groupUser.Id')"])
        // queryField = queryField.select('groupUser.groupId',"groupId");
        // queryField = queryField.addSelect("COUNT(groupUser.Id)", 'count')
        // queryField = queryField.select("COUNT(groupUser.Id)", 'count')
        // queryField = queryField.addSelect('user.userEmail','userEmail')
        // return queryField.select(['groupUser.groupId', "COUNT(\"groupUser\".\"id\")"])
      // }
      if (orderBy == true)
        return queryField.orderBy(requestModel.Children[0] + "." + orderByField, 'ASC');
      else
      return queryField.orderBy(requestModel.Children[0] + "." +orderByField,'DESC');
      
    }
    catch (err) {
      console.log("Error thrown from createQueryByRequestModelQuery....... Error is....."+JSON.stringify(err));
      throw err;
    }
    
  }

  public async search(requestModel: RequestModelQuery): Promise<ResponseModel<TDto>> {
    try {
      let queryField: any = await this.createQueryByRequestModelQuery(requestModel);
      
      // let totalRecords = await queryField.getCount();
      // console.log("totalRecords is....." + JSON.stringify(totalRecords));
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
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.success, "200", null, null, null, null, null)
      console.log("Setting result......")
      await final_result.setDataCollection(result);
      // console.log("Final_result is......" + JSON.stringify(final_result));
      
      // console.log("\n\n\n\n\nresult1 is....." + JSON.stringify(result));
      return final_result;
    }
    catch (err) {
      console.log("Error is......." + JSON.stringify(err));
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.error, "500", null, null, null, null, err)

      throw final_result;
    };
    
  }

  public async getCountByConditions(requestModel: RequestModelQuery): Promise<any>{
    try {
      let result = [];
      console.log("\n\n\n\n Inside getCountByConditions.....requestModel is......." + JSON.stringify(requestModel));
      let myJSON = {};
      let groupByField: string = requestModel.Filter.OrderByField;
      let baseEntity: string = requestModel.Children[0];
      let result1: any = await (await this.createQueryByRequestModelQuery(requestModel)).select("COUNT("+baseEntity+".Id)", 'count_temp').addSelect(groupByField).groupBy(groupByField).execute();
      // let result2: any = await this.genericRepository.query('SELECT "groupUser"."group_id" AS "groupUser_group_id", "groupUser"."id" AS "groupUser_id", COUNT("groupUser"."id") AS "count" FROM "groupUsers" "groupUser" INNER JOIN "users" "user" ON "user"."id"="groupUser"."user_id"  INNER JOIN "groups" "group" ON "group"."id"="groupUser"."group_id" WHERE "user"."user_email" LIKE \'%subahshlavi04@gmail.com%\' OR "user"."user_email" LIKE \'%subahshlavi03@gmail.com%\' GROUP BY "groupUser"."id"');

      console.log("\n\n\n\n\nResult1 is................" + JSON.stringify(result1));
      // console.log("\n\n\n\n\nResult2 is................" + JSON.stringify(result2));
      // await Promise.all(requestModel.Filter.Conditions.map(async (condition: Condition, i) => {
      //   console.log("\n\n\n\nInitilizing " + i + "   th cond............\n\n\n");
      //   let myJSON = {}
      //   let reqModel: RequestModelQuery = requestModel;
      //   reqModel.Filter.Conditions = [requestModel.Filter.Conditions[i]];
      //   myJSON[reqModel.Filter.Conditions[i].FieldName] = requestModel.Filter.Conditions[i].FieldValue;
      //   console.log("\n\n\n\njson hghgh is.........."+JSON.stringify(myJSON)+"\n\n\n\n")
      //   myJSON["count"] = await (await this.createQueryByRequestModelQuery(reqModel)).getCount();
      //   console.log("MyJSON is.................." + JSON.stringify(myJSON));
      //   result.push(myJSON);
      //   console.log("Result is......." + JSON.stringify(result))
        
      // }))
      return result1;
    }
    catch (err) {
      throw err;
    }
  }
  

  public async getAllRecordsCount(requestModel: RequestModelQuery): Promise<number>{
    let result: number = await (await this.createQueryByRequestModelQuery(requestModel)).getCount();
    return result;
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
  //     queryField = queryField.leftJoinAndSelect("entity.community", "community").select(["community.Id"]);
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
      let result3 = queryField.getMany();
     // console.log("Result is....." + JSON.stringify(result3));
      let length_of_array = children.length;
      if (length_of_array != 0) {
        // children.unshift("groupUser");
        // console.log("After unshift....children is....." + children);
        for (let i = 0; i < children.length-1; i++) {
          queryField.leftJoinAndSelect(children[i] + "." + children[i+1], children[i+1])
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





  public async getChildrenIds(children: string[],id:number, child ?:string): Promise<ResponseModel<any>>{
    try {

      console.log("Children is....." + children);
      console.log("Child is...."+child);
      // let queryField = this.genericRepository.createQueryBuilder().select("entity").from(this.entityClassType, "entity");
      let queryField = this.genericRepository.createQueryBuilder(children[0]);
      // if(child!=null || child.length != 0)
      
      let result3 = queryField.getMany();
     // console.log("Result is....." + JSON.stringify(result3));
      let length_of_array = children.length;
      if (length_of_array != 0) {
        // children.unshift("groupUser");
        // console.log("After unshift....children is....." + children);
        for (let i = 0; i <length_of_array - 1 ; i++) {
          console.log("\n\n\n\n",children[i],children[i+1],"\n\n\n\n")
          queryField.leftJoinAndSelect(children[i] + "." + children[i+1], children[i+1])
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
      queryField.where(children[length_of_array-1]+".id=:Id",myJSON);
      // queryField.addSelect("user.community_id");
      queryField.addSelect(children[0] + ".id");
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
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.success, "200", null, null, null, null, null)
      console.log("Setting result......")
      await final_result.setDataCollection(result);
      // console.log("Final_result is......" + JSON.stringify(final_result));
      
      // console.log("\n\n\n\n\nresult1 is....." + JSON.stringify(result));
      return final_result;
    }
    catch (err) {
      console.log("Error is......." + JSON.stringify(err));
      let final_result: ResponseModel<TDto> = new ResponseModel("SampleInbuiltRequestGuid", null, ServiceOperationResultType.error, "500", null, null, null, null, err)

      throw final_result;
    };
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



  // public async getChannelGroupRequestModel(): Promise<any>{
  //   try {
  //     let children = ["group", "community"];
  //     let queryField = this.genericRepository.createQueryBuilder("groupUser")
  //     queryField = queryField.leftJoinAndSelect("groupUser.group", "group")
  //       .leftJoinAndSelect("group.community", "community").select(["community.Id"]);
  //     console.log("sql query for channelGroup is......" + queryField.getSql());
  //     let result:any = await queryField.where("groupUser.Id=:Id", { Id: 1 }).distinct().getOneOrFail();
  //     console.log("Result is....."+JSON.stringify(result))
  //     return result;
  //   }
  //   catch (err) {
  //     console.log("Error is......" + err);
  //   }
  //   return null;
  // }

  // public async getUserRequestModel(): Promise<any>{
  //   try {
  //     let children = ["community"];
  //     let queryField = this.genericRepository.createQueryBuilder().select("entity").from(this.entityClassType, "entity");
  //     queryField = queryField.leftJoinAndSelect("entity.community", "community").select(["community.Id"]);
  //     console.log("sql query for user is......" + queryField.getSql());
  //   }
  //   catch (err) {
  //     console.log("Error is......" + err);
  //   }
  // }



}