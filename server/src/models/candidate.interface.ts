import { language } from "./language.interface";

export interface candidate {
    id:string,
    name:string,
    beginYear:number,
    lastUpdateDate:Date,
    languages: string[]
}