import { getStingInfo, StringUtils, toUpperCase } from '../app/Utils';
// describe('Utils test suite', () => {
//   test('It should return uppercase of a valid string', () => {
//     // arrange :

//     const sut = toUpperCase;
//     const expected = 'ABC';

//     //act:
//     const actual = toUpperCase('abc');

//     //assert:

//     expect(actual).toBe(expected);
//   });
// });

// describe('getString Info for arg My-String should', () => {
//   test('return right length', () => {
//     const actual = getStingInfo('My-String');
//     expect(actual.characters).toHaveLength(9);
//   });
//   test('return right lower case', () => {
//     const actual = getStingInfo('My-String');
//     expect(actual.lowerCase).toBe('my-string');
//   });
//   test('return right upper case', () => {
//     const actual = getStingInfo('My-String');
//     expect(actual.upperCase).toBe('MY-STRING');
//   });
//   test('return right characters', () => {
//     const actual = getStingInfo('My-String');
//     expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
//     expect(actual.characters).toContain<string>('M');
//     expect(actual.characters).toEqual(
//       expect.arrayContaining(['y', '-', 'S', 't', 'r', 'i', 'n', 'g', 'M'])
//     );
//   });
//   test('return right extra info', () => {
//     const actual = getStingInfo('My-String');
//     expect(actual.extraInfo).not.toBe(undefined);
//     expect(actual.extraInfo).not.toBeUndefined();
//     expect(actual.extraInfo).toBeDefined();
//     expect(actual.extraInfo).toBeTruthy();
//   });
// });

//   it('should return info for valid string', () => {
//     const actual = getStingInfo('My-String');

//     expect(actual.lowerCase).toBe('my-string');
//     expect(actual.extraInfo).toEqual({});

//     expect(actual.characters.length).toBe(9);
//     expect(actual.characters).toHaveLength(9);

//     expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
//     expect(actual.characters).toContain<string>('M');
//     expect(actual.characters).toEqual(
//       expect.arrayContaining(['y', '-', 'S', 't', 'r', 'i', 'n', 'g', 'M'])
//     );

//     expect(actual.extraInfo).not.toBe(undefined);
//     expect(actual.extraInfo).not.toBeUndefined();
//     expect(actual.extraInfo).toBeDefined();
//     expect(actual.extraInfo).toBeTruthy();
//   });

describe('ToUpperCase examples', () =>{
test.each([
{input: 'abc', expected: 'ABC'},
{input: 'bbc', expected: 'BBC'},
{input: 'cbc', expected: 'CBC'}
])('$input toUpperCase should be $expected',({input, expected})=>{
   const actual = toUpperCase(input);
   expect(actual).toBe(expected);
})
})

describe('StringUtils test', () =>{
    let sut : StringUtils;

    beforeEach(() =>{
        sut = new StringUtils();

    })

    test('Should return correct upperCase', () =>{
        const actual = sut.toUpperCase('abc'); 
        expect(actual).toBe('ABC');

    })

    test('Should throw error on invalid argument - function', () =>{
        const expectError = () =>{
            const actual = sut.toUpperCase('');
        }
        expect(expectError).toThrow();
    })
    test('Should throw error on invalid argument - try catch', (done) =>{
        try{
            sut.toUpperCase('');
            done('GetStringInfo should throw error for invalid arg!')
        } catch (error){
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Invalid argument')
            done();
        }
    })
})