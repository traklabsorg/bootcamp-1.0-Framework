import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from "typeorm";
import {EntityBase} from "../../framework/entities/EnitityBase";


@Entity('sections')
export class Section extends EntityBase{

    constructor(id?: number) {
        super();
        // this.Id = id==null?0: id;
    }

}