import { Client } from "discord.js";
import ICustomClient from "../interfaces/ICustomClient";
import { IConfig } from "../interfaces/IConfig";

export default class CustomClient extends Client implements ICustomClient 
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