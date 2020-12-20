

//Entity('logs')
export class Log{

  constructor() {
    this.issueCategoryId = 123;
    this.issueCategoryId = 1234;
    this.exceptionMessage = "excep";
    this.userMessage = "usermessage";
    this.exceptionType = "exceptionType";
    this.logParametreList = "loglist";
    this.stackTrace = "stacktrace";
    this.machineName = "machine1";
    this.loginName = "login1";
    this.errorClass = "error1";
    this.errorMethod = "errmeth1";
    this.tenantId = 123;
    this.userId = 12345;
    this.requestGuid = "reuestguid1";
    this.assemblyName = "assembly1";
    this.requestModel = "requestModel";
    this.CreationDate = "creationdate";
    this.applicationId = 12345;
    this.innerException = "exception1";
  }
  private issueCategoryId: number;

  private issueTypeId: number;

  private exceptionMessage: string;

  private userMessage: string;

  private exceptionType: string;

  private logParametreList: string;

  private stackTrace: string;

  private machineName: string;

  private loginName: string;

  private errorClass: string;

  private errorMethod: string;

  private tenantId: number;

  private userId: number;

  private requestGuid: string;

  private assemblyName: string;

  private requestModel: string;
  
  private CreationDate: string;

  private applicationId: number;

  private innerException: string;

    public getIssueCategoryId(): number {
        return this.issueCategoryId;
    }

    public setIssueCategoryId(issueCategoryId: number): void {
        this.issueCategoryId = issueCategoryId;
    }

    public getIssueTypeId(): number {
        return this.issueTypeId;
    }

    public setIssueTypeId(issueTypeId: number): void {
        this.issueTypeId = issueTypeId;
    }

    public getExceptionMessage(): string {
        return this.exceptionMessage;
    }

    public setExceptionMessage(exceptionMessage: string): void {
        this.exceptionMessage = exceptionMessage;
    }

    public getUserMessage(): string {
        return this.userMessage;
    }

    public setUserMessage(userMessage: string): void {
        this.userMessage = userMessage;
    }

    public getExceptionType(): string {
        return this.exceptionType;
    }

    public setExceptionType(exceptionType: string): void {
        this.exceptionType = exceptionType;
    }

    public getLogParametreList(): string {
        return this.logParametreList;
    }

    public setLogParametreList(logParametreList: string): void {
        this.logParametreList = logParametreList;
    }

    public getStackTrace(): string {
        return this.stackTrace;
    }

    public setStackTrace(stackTrace: string): void {
        this.stackTrace = stackTrace;
    }

    public getMachineName(): string {
        return this.machineName;
    }

    public setMachineName(machineName: string): void {
        this.machineName = machineName;
    }

    public getLoginName(): string {
        return this.loginName;
    }

    public setLoginName(loginName: string): void {
        this.loginName = loginName;
    }

    public getErrorClass(): string {
        return this.errorClass;
    }

    public setErrorClass(errorClass: string): void {
        this.errorClass = errorClass;
    }

    public getErrorMethod(): string {
        return this.errorMethod;
    }

    public setErrorMethod(errorMethod: string): void {
        this.errorMethod = errorMethod;
    }

    public getTenantId(): number {
        return this.tenantId;
    }

    public setTenantId(tenantId: number): void {
        this.tenantId = tenantId;
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getRequestGuid(): string {
        return this.requestGuid;
    }

    public setRequestGuid(requestGuid: string): void {
        this.requestGuid = requestGuid;
    }

    public getAssemblyName(): string {
        return this.assemblyName;
    }

    public setAssemblyName(assemblyName: string): void {
        this.assemblyName = assemblyName;
    }

    public getRequestModel(): string {
        return this.requestModel;
    }

    public setRequestModel(requestModel: string): void {
        this.requestModel = requestModel;
    }

    public getCreationDate(): string {
        return this.CreationDate;
    }

    public setCreationDate(CreationDate: string): void {
        this.CreationDate = CreationDate;
    }

    public getApplicationId(): number {
        return this.applicationId;
    }

    public setApplicationId(applicationId: number): void {
        this.applicationId = applicationId;
    }

    public getInnerException(): string {
        return this.innerException;
    }

    public setInnerException(innerException: string): void {
        this.innerException = innerException;
    }

 
}