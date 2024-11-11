import { PasswordChecker } from '../../app/pass_checker/PasswordChecker';

describe('Password Checker test', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  test('Password is invalid if length is lest than 8 char', () => {
    const actual = sut.checkPassword('1234qwert');
    expect(actual).toBe(false);
  });

  test('Password should be valid if the lenth i greated or equal to 8 char', () => {
    const actual = sut.checkPassword('1234Qwert');
    expect(actual).toBe(true);
  });

  test('Password is invalid if do not have Upper Case letter', () => {
    const actual = sut.checkPassword('1234qwert');
    expect(actual).toBe(false);
  });

  test('Password is valid if it has Upper Case letter', () => {
    const actual = sut.checkPassword('1234qWert');
    expect(actual).toBe(true);
  });

  test('Password is invalid if do not have Lpper Case letter', () => {
    const actual = sut.checkPassword('1234QWERT');
    expect(actual).toBe(false);
  });

  test('Password is valid if it has Lower Case letter', () => {
    const actual = sut.checkPassword('1234qWert');
    expect(actual).toBe(true);
  });

});
