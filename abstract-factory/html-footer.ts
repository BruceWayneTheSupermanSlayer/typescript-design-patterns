import {Footer} from "./abstract-factory-interface";

export class HtmlFooter implements Footer {
  content: string;

  constructor(text: string) {
    this.content = text;
    console.log(this.content);
  }

}