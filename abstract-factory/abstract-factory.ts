import {Content, Footer, Header, IWebsiteFactory} from "./abstract-factory-interface";
import {HtmlContent} from "./html-content";
import {HtmlFooter} from "./html-footer";
import {HtmlHeader} from "./html-header";

export class HTMLWebsitePageFactory implements IWebsiteFactory {
  createContent(): Content {
    return new HtmlContent("html-content");
  }

  createFooter(): Footer {
    return new HtmlFooter("html-footer");
  }

  createHeader(): Header {
    return new HtmlHeader("html-header");
  }

}