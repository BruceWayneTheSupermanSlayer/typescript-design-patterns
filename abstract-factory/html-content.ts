import {Content} from "./abstract-factory-interface";

export class HtmlContent implements Content {
  content: string;

  constructor(text: string) {
    this.content = text;
    console.log(this.content);
  }

}