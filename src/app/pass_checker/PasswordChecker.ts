export enum PasswordErrors {
  SHORT = 'Password is too short',
  NO_UPPER_CASE = 'Upper case letter required',
  NO_LOWER_CASE = 'Lower case letter required',
  NO_NUMBER = 'Number is required',
}

export type CheckResult = {
  valid: boolean;
  reasons: PasswordErrors[];
};

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    this.checkLength(password, reasons);
    this.checkUpperCase(password, reasons);
    this.checkLowerCase(password, reasons);
    return {
      valid: reasons.length > 0 ? false : true,
      reasons: reasons,
    };
  }
  public checkAdminPassword(password: string): CheckResult {
    const validPassword = this.checkPassword(password);
    this.checkNumber(password, validPassword.reasons);
    return {
      valid: validPassword.reasons.length > 0 ? false : true,
      reasons: validPassword.reasons,
    };
  }
  private checkLength(password: string, reasons: PasswordErrors[]) {
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
  }
  private checkUpperCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toLowerCase()) {
      reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
  }
  private checkLowerCase(password: string, reasons: PasswordErrors[]) {
    if (password == password.toUpperCase()) {
      reasons.push(PasswordErrors.NO_LOWER_CASE);
    }
  }
  private checkNumber(password: string, reasons: PasswordErrors[]) {
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
      reasons.push(PasswordErrors.NO_NUMBER);
    }
  }
}
