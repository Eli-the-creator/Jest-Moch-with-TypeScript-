import { v4 } from 'uuid';

export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    howLong: number;
    length: number;
    spell: string[];
    extraInfo: object | undefined;
};

type LoggerServCallBack = (arg: string) => void;

export function calcComplexity(stringInfo: stringInfo) {
    if (stringInfo.extraInfo) {
        return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
    } else {
        return 0;
    }
}

export function toUCCallBack(arg: string, callBack: LoggerServCallBack) {
    if (!arg) {
        callBack('Invalid argument');
        return;
    }
    callBack(`Call whith arguments ${arg}`);
    return arg.toUpperCase();
}

export function toLowerCaseWhitID(arg: string) {
    return arg.toLowerCase() + v4();
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}
