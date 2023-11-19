//

import { calcComplexity, toUCCallBack } from '../../Doubles/OtherUtils';

describe.skip('Other test utils test suit', () => {
    // Mocks
    describe.only('Tracking CallBack - jest Mock', () => {
        // Jest Mock
        const callBackMock = jest.fn();

        // Clear
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('toUCCallBack - calls callback function for invalid arguments - track calls', () => {
            const actual = toUCCallBack('', callBackMock);
            expect(callBackMock).toBeCalledWith('Invalid argument');
            expect(callBackMock).toBeCalledTimes(1);
        });

        it('toUCCallBack - calls callback function for invalid arguments - track calls', () => {
            const actual = toUCCallBack('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toBeCalledWith('Call whith arguments abc');
            expect(callBackMock).toBeCalledTimes(1);
        });
    });

    //
    it('calcComplexity - function calc complecity test', () => {
        // Stubs
        const someInfo = {
            length: 5,
            extraInfo: {
                field: 'texttext',
                field2: 'texttext',
            },
        };

        const actual = calcComplexity(someInfo as any);
        expect(actual).toBe(10);
    });
});
