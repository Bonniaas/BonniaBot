import { Client } from "discord.js";
import ICustomeClient from "../interfaces/ICustomeClient";
import { IConfig } from "../interfaces/IConfig";

export default class CustomeClient extends Client implements ICustomeClient 
{
    conifg: IConfig;

    constructor()
    {
        super({ intents: []})

        this.conifg = require(`${process.cwd()}/data/config.json`)
    }
    init(): void {
        this.login(this.conifg.token)
        .then(() => console.log("Log in"))
        .catch((err) => console.error(err))
    }
}