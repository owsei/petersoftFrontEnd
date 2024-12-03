export interface Mainmenu {
  id:number,
  name :string,
  route:string,
  isDropDown:boolean,
  parent:boolean,
  idParent:number|null,
  order:number
}
