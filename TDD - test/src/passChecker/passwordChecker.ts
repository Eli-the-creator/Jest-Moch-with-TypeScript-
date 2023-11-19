export enum ErrorPasswordType {
    SHOR = 'Password shout have at list 8 character',
    NO_UPPER_CASE = 'No upper case',
    NO_LOWER_CASE = 'No lower case',
}

export interface CheckResault {
    valid: boolean;
    reason: ErrorPasswordType[];
}

export class PasswordChecker {
    public checker(arg: string): CheckResault {
        const reason: ErrorPasswordType[] = [];
        if (arg.length < 8) {
            reason.push(ErrorPasswordType.SHOR);
        }
        if (arg === arg.toUpperCase()) {
            reason.push(ErrorPasswordType.NO_UPPER_CASE);
        }
        if (arg === arg.toLowerCase()) {
            reason.push(ErrorPasswordType.NO_UPPER_CASE);
        }

        return {
            valid: !reason.length ? true : false,
            reason: reason,
        };
    }
}
