export class PasswordChecker {
  public checkPassword(password: string): boolean {
    return password.length < 8 ||
      password == password.toLowerCase() ||
      password == password.toUpperCase()
      ? false
      : true;
  }
}
