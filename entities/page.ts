
export class Page{
  public PageSize:number;
  public PageNumber:number;
  public TotalRecords:number;
  public CurrentPage:number;

  constructor(pageSize:number,pageNumber:number,totalRecords:number,currentPage:number){
      this.PageSize = pageSize;
      this.PageNumber = pageNumber;
      this.TotalRecords = totalRecords;
      this.CurrentPage = currentPage;
  }
}