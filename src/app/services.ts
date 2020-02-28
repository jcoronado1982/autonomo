import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';


interface login {
  errorNum: number;
  account: string,
  accounts: object,
  accountType: string,
  email: string,
  idParent: string,
  name: string,
  hasError: boolean,
  errorDisplay: string,
  errorDesc: string,
  token: string,
  subscriber: string,
  username: string,
  requiredEmailUpdate: boolean,
  requiredPaperless: boolean,
  requiredQuestions: boolean,
  requiredAccountUpdate: boolean,
  requiredPasswordReset: boolean
}
interface accountDetails {
  response(response: any, arg1: string);
  HasError: boolean,
  errorDisplay: string,
  ErrorDesc: string
}
interface permissions {
  permission: object,
  idUserAPP: string,
  idParent: string,
  hasError: boolean,
  errorDesc: string,
}

@Injectable({
  providedIn: 'root'
})
export class Service {
  private urlService: string = "/api";
  constructor(private http: HttpClient, private router: Router) { }
  login(Username, Password) {
    var form = new FormData();
    form.append("Username", Username);
    form.append("Password", Password);
    return this.http.post<login>(this.urlService + '/Authenticate/Login', form);
  }
  accountDetails(token, subscriber, account) {
    var form = new FormData();
    form.append("token", token);
    form.append("subscriber", subscriber);
    form.append("account", account);
    return this.http.post<accountDetails>(this.urlService + '/Authenticate/AccountDetails', form);
  }
  permissions(token, accountType, name, lastName) {
    var form = new FormData();
    form.append("token", token);
    form.append("accountType", accountType);
    form.append("name", name);
    form.append("lastName", lastName);
    return this.http.post<permissions>(this.urlService + '/Authenticate/permissions', form);
  }
}