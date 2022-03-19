import { BodyPart } from "../enums/BodyPart";
import { Category } from "../enums/Category";

export interface Excersise {
  title: string;
  category: Category;
  bodyPart: BodyPart;
}
