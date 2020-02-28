import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {
  private _loading: boolean = false;
  private _loadingMin: boolean = false;
  private _loadingMin2: boolean = false;
  private session: string;
  loadingStatus= new Subject();
  loadingMinStatus= new Subject();
  loadingMin2Status= new Subject();

  get loadingMin():boolean {
    return this._loadingMin;
  }
  set loadingMin(value) {
    this._loadingMin = value;
    this.loadingMinStatus.next(value);
  }
  startLoadingMin() {
    this.loadingMin = true;
  }
  stopLoadingMin() {
    this.loadingMin = false;
  }
  getSession(value) {
   return this.session;
  }
  setSession(value) {
    this.session = value;
  }
  get loadingMin2():boolean {
    return this._loadingMin2;
  }
  set loadingMin2(value) {
    this._loadingMin2 = value;
    this.loadingMin2Status.next(value);
  }
  startLoadingMin2() {
    this.loadingMin2 = true;
  }
  stopLoadingMin2() {
    this.loadingMin2 = false;
  }
  get loading():boolean {
    return this._loading;
  }
  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }
  startLoading() {
    this.loading = true;
  }
  stopLoading() {
    this.loading = false;
  }
}