import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { AlertasComponent } from '../alertas/alertas.component';
import { GlobalService } from '../global.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  constructor(public global:GlobalService,public dialog:MatDialog, private router:Router,public appComponent:AppComponent){}

  ngOnInit(){
  
  }
  ngAfterViewInit(){
   
  }
}
