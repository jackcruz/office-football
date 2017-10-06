export class User {
  private _userName: string = '';
  private _password: string = '';

  constructor() { }

  set userName(userName: string) {
    this._userName = userName;
  }

  get userName(): string {
    return this._userName;
  }

  set password(password: string) {
    // TODO: add encryption
    this._password = password;
  }

  get password(): string {
    return this._password;
  }
}