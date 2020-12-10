import {Page} from "./page";
import {Condition} from "./condition";

export class Filter{

    public OrderByField!: string;
    public IsOrderByFieldAsc!: boolean;
    public Conditions: Array<Condition>;
    public PageInfo!:Page;

    


    
    constructor(){
        this.IsOrderByFieldAsc = false;
      this.Conditions = new Array<Condition>();
      this.PageInfo = new Page(10,1,0,1);
    }
}