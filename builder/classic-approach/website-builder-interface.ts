import {Website} from "./website";

export interface IWebsiteBuilder {

    setName(name: string): IWebsiteBuilder;

    setHost(host: string): IWebsiteBuilder;

    setPort(port: number): IWebsiteBuilder;

    setPremium(isPremium: boolean): IWebsiteBuilder;

    build(): Website;

}