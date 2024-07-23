import { IConfig } from "./IConfig";

export default interface ICustomeClient {
    conifg: IConfig;

    Invite(): void;
}