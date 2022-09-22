import {PremiumWebsiteBuilder} from "./classic-approach";


const website = new PremiumWebsiteBuilder();

const site = website.setName('rohit').setHost("localhost").setPort(3000).setPremium(true).build();
console.log(site)