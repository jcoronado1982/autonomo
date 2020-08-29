import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { HttpHeaders } from '@angular/common/http';

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
  //private urlService: string = "/api/";
  private urlService: string = "http://theruby2.com/api/";
  constructor(private http: HttpClient, private router: Router) { }
  contactUs(name, email,type,description) {
    const payloadHeaders = new Headers({'Access-Control-Allow-Origin' : '*','authorization':'Bearer *********'});
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };



    var form = new FormData();
    form.append("token", "ndjoglñklf1df2749gh789dh56fg1ndjoglñklf1df2749gh789dh56fg16h489df789aeythohviuvghgu44undjoglñklf1df2749gh789dh56fg16h489df789aeythohviuvghgu44u6h489df789aeythohviuvghgu44u");
    form.append("name", name);
    form.append("email", email);
    form.append("type", type);
    form.append("description", description);
    return this.http.post<login>(this.urlService + 'permissions/contactUs', form);
  }
}