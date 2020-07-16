import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Subscription } from "rxjs";
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  public prodList = [];
  public prodList2 = [];
  public slideIcons:boolean = false;
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
    let imgBan2 = [      
      {
        name: "PHP",
        imgAdj: "../../../../assets/images/phpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },{
        name: "CLOUD COMPUTING",
        imgAdj: "../../../../assets/images/cloudComputing.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "MYSQL",
        imgAdj: "../../../../assets/images/mysqlNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "JAVA",
        imgAdj: "../../../../assets/images/java.svg",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "ORACLE",
        imgAdj: "../../../../assets/images/oracleNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },  
      {
        name: "POSTGRESQL",
        imgAdj: "../../../../assets/images/postgresql.svg",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "AZURE",
        imgAdj: "../../../../assets/images/azure.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "IONIC",
        imgAdj: "../../../../assets/images/ionicLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      }     
      
    ];
    this.prodList2 = imgBan2;
    setInterval(() => {this.changeIcon();}, 30000);
  }
  changeIcon(){
    this.slideIcons = !this.slideIcons; 
  }
  gotoId(value){
    localStorage.setItem("idItem",value);
    this.router.navigate(['our-services']);
  }
  goToId1(){
    var el = document.getElementById('aboutUs');
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  }
  goToId2(){
    var el = document.getElementById('services');
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
  }
  goToId3(){
    var el = document.getElementById('howWeWork');
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  }
  goToId4(){
    var el = document.getElementById('projects');
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
  goToId5(){
    var el = document.getElementById('contactUs');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  
}

