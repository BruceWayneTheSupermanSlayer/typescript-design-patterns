import {Header} from "./abstract-factory-interface";

export class HtmlHeader implements Header {
  content: string;

  constructor(text: string) {
    this.content = text;
    console.log(this.content);
  }

}