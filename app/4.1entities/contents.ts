import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {EntityBase} from "../../framework/entities/EnitityBase";

@Entity('contents')
export class Content extends EntityBase{

    constructor(id?: number, contentName?: string) {
        // this.Id = id==null?0: id;
        super();
        if(contentName!=null)
            this.ContentName = contentName;
        else
            this.ContentName = '';
    }


// @PrimaryGeneratedColumn()
// Id: number;

@Column({name:"content_name"})
ContentName: string;
}