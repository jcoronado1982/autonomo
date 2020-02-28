import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public global: GlobalService, private loadingScreenService: LoadingScreenService, private router: Router, private formBuilder: FormBuilder, public appComponent: AppComponent, private services: Service, public dialog: MatDialog) {
    this.createForm();
  }
  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });
  }
  ngOnInit() {
    this.global.signOff();
  }

  login() {
    let username: string = this.loginForm.value.username;
    let password: string = this.loginForm.value.password;
    let idUser: number;
    let objAccounts;
    let userName2: string;
    if (!this.loginForm.invalid) {
      this.loadingScreenService.startLoading();
      this.services.login(btoa(username), btoa(password)).subscribe(data => {
        if (data.hasError == false) {
          objAccounts = data.accounts;
          idUser = objAccounts.AccountList[0].userID;
          sessionStorage.setItem("token", data.token);
          var requiredEmailUpdate = data.requiredEmailUpdate;
          sessionStorage.setItem("email", btoa(data.email));
          sessionStorage.setItem("name", btoa(data.name));
          sessionStorage.setItem("selectBan", btoa(data.account));

          let accountName;
          let lastName: string = '';
          let name: string = '';
          if (data.name != "") {
            accountName = data.name.split(" ");
            name = accountName[0] + ' ' + accountName[1];
            for (let i = 0; i < accountName.length; i++) {
              if (i > 1) {
                lastName = lastName + ' ' + accountName[i];
              }
            }
            lastName = lastName.trim();
          }

          if (data.requiredPasswordReset == true) {
            this.loadingScreenService.stopLoading();
            this.router.navigate(['forgotpassword']);
          }
          else {
            if (data.username.length > 20) {
              userName2 = data.username.toString().substring(0, 20) + "...";
              sessionStorage.setItem("userName", userName2);
            }
            else {
              sessionStorage.setItem("userName", data.username);
            }
            sessionStorage.setItem("userName", 'Daniel alberto ll');
            sessionStorage.setItem("userName2", btoa(JSON.stringify(data.username)));
            sessionStorage.setItem("defaultSubscriber", btoa(JSON.stringify(data.subscriber))); //revisar si se esta guardando
            sessionStorage.setItem("requiredAccountUpdate", btoa(JSON.stringify(data.requiredAccountUpdate)));//revisar si se esta guardando
            sessionStorage.setItem("firstload", btoa(JSON.stringify(false)));//revisar
            this.services.accountDetails(data.token, btoa(data.subscriber), btoa(data.account)).subscribe(data2 => {
              if (data2.HasError == false) {
                sessionStorage.setItem("getAccount", btoa(JSON.stringify(objAccounts)));
                sessionStorage.setItem("AccountList", btoa(JSON.stringify(objAccounts.AccountList)));
                sessionStorage.setItem("getAccountDetails", btoa(JSON.stringify(data2)));

                this.loadingScreenService.stopLoading();
                this.global.session();

                if (JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).SubscriberInfo.length > 0) {
                  if (JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).SubscriberInfo[0].prepaidBalanceField !== null) {
                    sessionStorage.setItem("prepaidBalance", btoa(JSON.stringify(JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).SubscriberInfo[0].prepaidBalanceField.toString())));

                    if (JSON.parse(atob(sessionStorage.getItem("prepaidBalance"))).search('CR') > -1) {
                      sessionStorage.setItem("prepaidBalance", btoa('0'));
                    }
                  }
                  sessionStorage.setItem("socRateField", btoa(JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).SubscriberInfo[0].planInfoField.socRateField));
                }
                sessionStorage.setItem("popPreguntasSeguridad", btoa(JSON.stringify(data.requiredQuestions)));
                if (requiredEmailUpdate === true) {
                  this.router.navigate(['profile/2']);
                }
                else {
                  this.router.navigate(['home']);
                }
              }
              else {
                this.loadingScreenService.stopLoading();
                this.global.notif(data2.errorDisplay);
              }
            });
          }
        }
        else {
          this.loadingScreenService.stopLoading();
          this.global.notif(data.errorDisplay);
        }
      });
    }
  }
}