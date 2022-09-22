import {HTMLWebsitePageFactory} from "./abstract-factory";
import {IWebsiteFactory} from "./abstract-factory-interface";

const wpf: IWebsiteFactory = new HTMLWebsitePageFactory();

wpf.createContent().content
wpf.createFooter().content
wpf.createHeader().content