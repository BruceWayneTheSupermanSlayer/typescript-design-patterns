export interface IWebsiteFactory {
  createHeader(): Header;

  createContent(): Content;

  createFooter(): Footer;
}

export interface Header {
  content: string;
}

export interface Content {
  content: string;
}

export interface Footer {
  content: string;
}