import { IConfig } from "./IConfig";

export default interface ICustomClient {
    conifg: IConfig;

    Invite(): void;
}