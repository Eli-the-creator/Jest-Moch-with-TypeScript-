import { StringUtils, getStringInfo, toUpperCase } from '../app/utils';

// Triple AAA rule
//
// Arrange
// Act
// Assert

// F.I.R.S.T principles
// Fast - Unit Test shoud be fast
// Independent - isoletet and indepented (can't have shereble state )
// Repeateble - Shoud give the same result for the same input
// Self-Validating - After the test is finidh, it's shoud be clear (Pass / Fail)
// Through - Cover all the cases/path/scenarios

describe('Utils test suite', () => {
    //
    //
    describe('Class: String Util test', () => {
        it('Shoud return correct upper case', () => {
            const sut = new StringUtils();
            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
        });
    });
    //
    //

    describe('', () => {
        it('shoud return uppercase', () => {
            // Arrange:
            const sut = toUpperCase;
            const expected = 'ABC';

            // Act:
            const actual = sut('abc');

            // Assert:
            expect(actual).toBe(expected);
        });
    });

    describe('getStringInfo for arg My-text-here shoud', () => {
        test('return right length', () => {
            const actual = getStringInfo('My-text-here');
            expect(actual.howLong).toEqual(12);
        });

        test('return right length', () => {
            const actual = getStringInfo('My-text-here');
            expect(actual.upperCase).toBe('MY-TEXT-HERE');
        });

        test('return lo lower case', () => {
            const actual = getStringInfo('My-text');
            expect(actual.upperCase).toBe('MY-TEXT');
        });

        test('Return right character', () => {
            const actual = getStringInfo('My-text-here');
            expect(actual.character).toEqual(
                expect.arrayContaining(['M', 'x', 'e', 'h', '-']),
            );
        });

        test('return define extra info', () => {
            const actual = getStringInfo('My-text-here');
            expect(actual.extraInfo).toEqual<object>({});
            expect(actual.extraInfo).not.toBeUndefined();
        });
    });

    describe('Just to upperCase', () => {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'My-text-here', expected: 'MY-TEXT-HERE' },
            { input: 'def', expected: 'DEF' },
        ])(
            '$input to upper case shoud be $expected ',
            ({ input, expected }) => {
                const actual = toUpperCase(input);
                expect(actual).toBe(expected);
            },
        );
    });
});
