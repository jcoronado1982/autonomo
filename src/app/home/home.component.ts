import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public prodList = [];
  constructor(private router:Router,public appComponent:AppComponent,private services: Service,private loadingScreenService:LoadingScreenService,private global:GlobalService, public dialog:MatDialog){}
  
  ngOnInit() {
    let imgBan = [
      {
        name: "KOTLIN",
        imgAdj: "../../../../assets/images/kotlin.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "PYTHON",
        imgAdj: "../../../../assets/images/pyLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "CSHARP",
        imgAdj: "../../../../assets/images/csharpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "ANGULAR",
        imgAdj: "../../../../assets/images/angularLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "REACT",
        imgAdj: "../../../../assets/images/reactLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "SQL",
        imgAdj: "../../../../assets/images/sqlSLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },
      {
        name: "GCP",
        imgAdj: "../../../../assets/images/gcpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      },      
      {
        name: "AWS",
        imgAdj: "../../../../assets/images/awsNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"65px 0px"
      }      
      
    ];
    this.prodList = imgBan;
  }
  gotoId(value){
    localStorage.setItem("idItem",value);
    this.router.navigate(['our-services']);
  }

  
}

