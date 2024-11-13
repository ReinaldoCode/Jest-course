import { calculateComplexity } from '../../app/doubles/OthersUtils';

describe('Other Utils test', () => {
  test('Calculate complexity', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo',
      },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
