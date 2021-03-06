export class Player {
  public id: number = null;
  public Name: string = null ;

  constructor(Id?: number, name?: string){
    this.id = Id;
    this.Name = name;
  }
}