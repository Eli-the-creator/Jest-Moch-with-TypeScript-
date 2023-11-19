jest.mock('../../Doubles/OtherUtils', () => ({
    ...jest.requireActual('../../Doubles/OtherUtils'),
    calcComplexity: () => {
        return 10;
    },
}));

jest.mock('uuid', () => ({
    v4: () => '12345',
}));

import * as OtherUtils from '../../Doubles/OtherUtils';

describe('Module Test', () => {
    //
    test('calc complexity', () => {
        //
        const resual = OtherUtils.calcComplexity({} as any);
        console.log(resual);
    });

    test('feafaef', () => {
        const actual = OtherUtils.toUpperCase('eli');
        expect(actual).toBe('ELI');
    });

    //
    //
    //
    test('to lower case whit id', () => {
        const actual = OtherUtils.toLowerCaseWhitID('eli');
        expect(actual).toBe('eli12345');
    });
});
