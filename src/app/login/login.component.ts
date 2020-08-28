import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  login() {}
}