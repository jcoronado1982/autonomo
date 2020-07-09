import {Injectable} from '@angular/core';
import {Service} from './services';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AlertasComponent} from './alertas/alertas.component';
import {LoadingScreenService} from './services/loading-screen/loading-screen.service';
import {Router} from '@angular/router';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private sessionCounter: number = 1;
  private minutes: number = 20;
  private timeout: number = 60000;
  private checker: boolean = false;
  public referredSubscriber;
  public referredAccount;


  
  loadObserver= new Subject();
  loadObserver2= new Subject();
  goHomeSection = new Subject();
  chatStatus= new Subject(); // suscripcion para abrir el chat
  uptypeAccount= new Subject(); //suscripcion al tipo de cuenta

  constructor(private router: Router, public dialog: MatDialog, public services: Service, private loadingScreenService: LoadingScreenService) {}
  irChat(){
    this.chatStatus.next(true);
  }
  updateTypeAccount(value){
    this.uptypeAccount.next(value);
  }
  
  refreshDataTo(token){
 
  }

  notif(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {message: msg};
    const dialogRef = this.dialog.open(AlertasComponent, dialogConfig);
  }

  notifSignOff(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {message: msg, session: true};
    const dialogRef = this.dialog.open(AlertasComponent, dialogConfig);
  }

  session() {
    sessionStorage.setItem("session", "true");
    this.sessionCounter = 1;
    setTimeout(() => {
      if (this.checker == false) {
        this.checker = true;
        this.activeSession(0, false);
      }
    }, this.timeout);
  }

  activeSession(sw, close) {
    if (close == false) {
      if (sw == 0) {
        if (this.sessionCounter == this.minutes) {
          if (sessionStorage.getItem("session") == "true") {
            this.notifSignOff('Su sesión se ha vencido.');
            this.signOff();
          }
        }
        else {
          if (sessionStorage.getItem("session") == "true") {
            this.sessionCounter++;
            setTimeout(() => {
              this.activeSession(0, false);
            }, this.timeout);
          }
        }
      }
      else {
        this.sessionCounter = 1;
        this.notifSignOff('Su sesión se ha vencido.');
        this.signOff();
      }
    }
    else {
      this.sessionCounter = 1;
      sessionStorage.setItem("session", "false");
    }
  }

  validateSession() {
    if (sessionStorage.getItem("session") == "false" || sessionStorage.getItem("session") == null) {
      this.router.navigate(['login']);
      return false;
    }
    else {
      this.session();
      return true;
    }
  }
  sessionReview() {
    if (sessionStorage.getItem("session") == "false" || sessionStorage.getItem("session") == null || sessionStorage.getItem("session") == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  public signOff() {
    this.sessionCounter = 1;
    sessionStorage.setItem("session", "false");
    sessionStorage.setItem("objLogin", null);
    sessionStorage.setItem("menu", null);
    sessionStorage.setItem("session", null);
  
    sessionStorage.removeItem("session");
    sessionStorage.removeItem("objLogin");
    sessionStorage.removeItem("menu");
  }
  validarEmail(email) {
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
      return false;
    } else {
      return true;
    }
  }
}