import { StringUtils } from '../app/utils';

describe('Utils test suite', () => {
    //
    describe('class StringUtils test suite', () => {
        //
        // Jest hook
        let sut: StringUtils;
        beforeEach(() => {
            sut = new StringUtils();
            console.log('Setup ');
        });

        afterEach(() => {
            // clearing mock
            console.log('Teardown');
        });

        //  afterAll - been use to initialaze something befor all test been run
        //  beforeAll

        it('Shout return upperCase', () => {
            const actual = sut.toUpperCase('eli');

            expect(actual).toBe('ELI');
            console.log('Actula test');
        });

        it.only('Shode throw Error for invalise argument - function', () => {
            // expect(() => sut.toUpperCase('')).toThrow();
            // expect(() => sut.toUpperCase('')).toThrowError('Invalide argument');
            try {
                sut.toUpperCase('');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalide argument');
            }
        });

        // test.todo('Test this');
        // test.todo('Test does');
    });
});
