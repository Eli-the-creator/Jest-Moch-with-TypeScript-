import {
    CheckResault,
    ErrorPasswordType,
    PasswordChecker,
} from '../../passChecker/passwordChecker';

describe.skip('PasswordChecker', () => {
    let passwordChecker: PasswordChecker;

    beforeEach(() => {
        passwordChecker = new PasswordChecker();
    });

    it('should return valid result for a valid password', () => {
        const validPassword = 'ValidPass123';
        const result: CheckResault = passwordChecker.checker(validPassword);

        expect(result.valid).toBe(true);
        expect(result.reason).toEqual([]);
    });

    it('should return valid result for a password with at least 8 characters', () => {
        const invalidPassword = 'Short1';
        const result: CheckResault = passwordChecker.checker(invalidPassword);

        expect(result.valid).toBe(false);
        expect(result.reason).toContain(ErrorPasswordType.SHOR);
    });

    it('should return valid result for a password with no upper case letters', () => {
        const invalidPassword = 'nouppercase123';
        const result: CheckResault = passwordChecker.checker(invalidPassword);

        expect(result.valid).toBe(false);
        expect(result.reason).toContain(ErrorPasswordType.NO_UPPER_CASE);
    });

    it('should return valid result for a password with no lower case letters', () => {
        const invalidPassword = 'NOLOWERCASE123';
        const result: CheckResault = passwordChecker.checker(invalidPassword);

        expect(result.valid).toBe(false);
        expect(result.reason).toContain(ErrorPasswordType.NO_UPPER_CASE);
    });

    it('should return valid result for a password with multiple errors', () => {
        const invalidPassword = 'short';
        const result: CheckResault = passwordChecker.checker(invalidPassword);

        expect(result.valid).toBe(false);
        expect(result.reason).toContain(ErrorPasswordType.SHOR);
        expect(result.reason).toContain(ErrorPasswordType.NO_UPPER_CASE);
    });
});
