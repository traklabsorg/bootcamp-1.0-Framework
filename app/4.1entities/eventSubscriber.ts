import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {EntityBase} from "../../framework/entities/EnitityBase";


@Entity('eventSubscribers')
export class EventSubscribers extends EntityBase{

    constructor(id?: number) {
        super();
        // this.Id = id==null?0: id;
    }

    // @PrimaryGeneratedColumn()
    // Id: number;
}