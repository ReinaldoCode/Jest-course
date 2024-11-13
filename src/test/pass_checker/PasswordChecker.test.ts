import {
  PasswordChecker,
  PasswordErrors,
} from '../../app/pass_checker/PasswordChecker';

describe('Password Checker test', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  test('Password is invalid if length is lest than 8 char', () => {
    const actual = sut.checkPassword('12345');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  test('Password should be valid if the lenth i greated or equal to 8 char', () => {
    const actual = sut.checkPassword('12345678');
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  test('Password is invalid if do not have Upper Case letter', () => {
    const actual = sut.checkPassword('rwer');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  test('Password is valid if it has Upper Case letter', () => {
    const actual = sut.checkPassword('WE');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  test('Password is invalid if do not have Lpper Case letter', () => {
    const actual = sut.checkPassword('WER');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  test('Password is valid if it has Lower Case letter', () => {
    const actual = sut.checkPassword('ewr');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });
  test('Password is completed valid', () => {
    const actual = sut.checkPassword('83274wrJF');
    expect(actual.reasons).toHaveLength(0);
    expect(actual.valid).toBe(true);
  });
  test('Admin pasword is invalid if it dose not contain a number', () => {
    const actual = sut.checkAdminPassword('fgdsfgwrJF');
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    expect(actual.valid).toBe(false);
  });
  test('Admin pasword is valid if it contain a number', () => {
    const actual = sut.checkAdminPassword('fgdsf3rJF');
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
