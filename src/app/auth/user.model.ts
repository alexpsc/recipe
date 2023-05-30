export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationL: Date
  ) {}

  get token() {
    if (!this._tokenExpirationL || new Date() > this._tokenExpirationL) {
      return null;
    }
    return this._token;
  }
}
