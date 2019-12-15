import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLogin: boolean;

  constructor() { }
  IsLogin(): boolean {
    return this._isLogin;
  }

  setLogin(checklogin: boolean) { 
    this._isLogin = checklogin;
  }

}
