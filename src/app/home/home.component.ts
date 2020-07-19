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
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public prodList = [];
  public prodList2 = [];
  public slideIcons:boolean = false;
  public menuMobile:boolean = false;
  constructor(private router:Router,public appComponent:AppComponent,private services: Service,private loadingScreenService:LoadingScreenService,private global:GlobalService, public dialog:MatDialog){}
  
  ngOnInit() {
    this.languageDetection();
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
  showMenuMobile(){
    this.menuMobile = !this.menuMobile;
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
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }
  goToId4(){
    var el = document.getElementById('projects');
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }
  goToId5(){
    var el = document.getElementById('contactUs');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId1M(){
    this.menuMobile = !this.menuMobile;
    var el = document.getElementById('aboutUs');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId2M(){
    this.menuMobile = !this.menuMobile;
    var el = document.getElementById('services');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId3M(){
    this.menuMobile = !this.menuMobile;
    var el = document.getElementById('howWeWork');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId4M(){
    this.menuMobile = !this.menuMobile;
    var el = document.getElementById('projects');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId5M(){
    this.menuMobile = !this.menuMobile;
    var el = document.getElementById('contactUs');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  languageDetection(){
    var language=String(window.navigator.language);
    language=language.substring(0,2);
    if(language=="es"){
      console.log("Español");
    }
    if(language=="en"){
      console.log("Ingles");
    }
    /*
    ar-SA Arabic Saudi Arabia
    cs-CZ Czech Czech Republic
    da-DK Danish Denmark
    de-DE German Germany
    el-GR Modern Greek Greece
    en-AU English Australia
    en-GB English United Kingdom
    en-IE English Ireland
    en-US English United States
    en-ZA English South Africa
    es-ES Spanish Spain
    es-MX Spanish Mexico
    fi-FI Finnish Finland
    fr-CA French Canada
    fr-FR French France
    he-IL Hebrew Israel
    hi-IN Hindi India
    hu-HU Hungarian Hungary
    id-ID Indonesian Indonesia
    it-IT Italian Italy
    ja-JP Japanese Japan
    ko-KR Korean Republic of Korea
    nl-BE Dutch Belgium
    nl-NL Dutch Netherlands
    no-NO Norwegian Norway
    pl-PL Polish Poland
    pt-BR Portuguese Brazil
    pt-PT Portuguese Portugal
    ro-RO Romanian Romania
    ru-RU Russian Russian Federation
    sk-SK Slovak Slovakia
    sv-SE Swedish Sweden
    th-TH Thai Thailand
    tr-TR Turkish Turkey
    zh-CN Chinese China
    zh-HK Chinese Hong Kong
    zh-TW Chinese Taiwan 
    */
    //  Si necesitas informacion --> https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers
  }
}

