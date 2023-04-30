import {InquirerOutput} from "../inquirer/types";
import {Answers} from "inquirer";

export interface ModeConfig {
    name: string;
    description: string;
    command: string;
    openToUsers: boolean;
    input: () => InquirerOutput | Promise<InquirerOutput> | Answers | unknown;
}

export interface ModesConfig {
    silent: ModeConfig;
    interactive: ModeConfig;
    test: ModeConfig;
}

export interface AvailableModes {
    silent: string;
    interactive: string;
    test: string;
}