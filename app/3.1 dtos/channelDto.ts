import { EntitySchema } from "typeorm";
import { EntityListenerMetadata } from "typeorm/metadata/EntityListenerMetadata";
import { DtoBase } from "../../framework/entities/DtoBase";
import { EntityBase } from "../../framework/entities/EnitityBase";
import { Channel } from "../4.1entities/channel";

export class ChannelDto extends DtoBase{

    constructor() {
        super();
        // this.Id = 0;
        this.ChannelName2 = "";
        this.ChannelType2 = "";
        this.isExternalDto = false;
    }

    // private Id: number;

    private ChannelName2: string;
    private ChannelType2: string;
    private isExternalDto: boolean;
}
