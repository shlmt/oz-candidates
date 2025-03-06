import { language } from "./language.interface";

export interface candidate {
    id:string,
    name:string,
    lastUpdateDate:Date,
    languages: language[]
}