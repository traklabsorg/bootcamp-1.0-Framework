import { ResponseModel } from "../../framework/entities/responseModel";
import { ChannelDto } from "../3.1 dtos/channelDto";
import { Channel } from "../4.1entities/channel";
import BaseClass from "../../framework/appservice/AppService";
import AppService from "../../framework/appservice/AppService";

export class ChannelAppService extends AppService<Channel, ChannelDto>{
  
  // private entityType: Channel;
  // private dtoType: ChannelDto;

  constructor() {
    super(Channel,ChannelDto);
    // this.entityType = entity;
    // this.dtoType = dto;
  }

  public getAll():Promise<ResponseModel<ChannelDto[]> | null> {
    return this.findAll(Channel,ChannelDto);
  }
}
