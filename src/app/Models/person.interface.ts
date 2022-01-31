export interface Ipreson{
    id:string;
    name:string;
    imgUrl:string;
    childOf:Ipreson;
    fatherOf?:Ipreson[];
}