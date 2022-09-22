import {IWebsiteBuilder} from "./website-builder-interface";
import {Website} from "./website";

export class PremiumWebsiteBuilder implements IWebsiteBuilder {

    private website: Website;

    constructor() {
        this.website = new Website();
        this.website.isPremium = true;
    }

    build(): Website {
        return this.website;
    }

    setHost(host: string): IWebsiteBuilder {
        this.website.host = host;
        return this;
    }

    setName(name: string): IWebsiteBuilder {
        this.website.name = name;
        return this;
    }

    setPort(port: number): IWebsiteBuilder {
        this.website.port = port;
        return this;
    }

    setPremium(isPremium: boolean): IWebsiteBuilder {
        this.website.isPremium = isPremium;
        return this;
    }
}