import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Subscription } from "rxjs";
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-autonomo',
  templateUrl: './autonomo.component.html',
  styleUrls: ['./autonomo.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AutonomoComponent implements OnInit {
  public myInterval = 30000;
  public selTab: number;
  public cont: number = 0;
  public blur = 0;
  public blur1: number = 2;
  public prodList = [];
  public prodList2 = [];
  public slideIcons:boolean = false;
  goHomeSection: Subscription;
  constructor(private global:GlobalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selTab = 1;
    let imgBan = [
      {
        name: "JAVA",
        imgAdj: "../../../../assets/images/java.svg"
      },
      {
        name: "PYTHON",
        imgAdj: "../../../../assets/images/pyLogo.png"
      },
      {
        name: "GCP",
        imgAdj: "../../../../assets/images/gcpLogo.png"
      },
      {
        name: "ANGULAR",
        imgAdj: "../../../../assets/images/angularLogo.png"
      },
      {
        name: "SQL",
        imgAdj: "../../../../assets/images/sqlSLogo.png"
      },
      {
        name: "AWS",
        imgAdj: "../../../../assets/images/awsLogo.png"
      },
      {
        name: "REACT",
        imgAdj: "../../../../assets/images/reactLogo.png"
      },
      {
        name: "CSHARP",
        imgAdj: "../../../../assets/images/csharpLogo.png"
      }
    ];
    this.prodList = imgBan;
    let imgBan2 = [
      {
        name: "PYTHON",
        imgAdj: "../../../../assets/images/pyLogo.png"
      },
      {
        name: "PHP",
        imgAdj: "../../../../assets/images/phpLogo.png"
      },
      {
        name: "IONIC",
        imgAdj: "../../../../assets/images/ionicLogo.png"
      },
      {
        name: "REACT",
        imgAdj: "../../../../assets/images/reactLogo.png"
      },
      {
        name: "CSHARP",
        imgAdj: "../../../../assets/images/csharpLogo.png"
      },
      {
        name: "AWS",
        imgAdj: "../../../../assets/images/awsLogo.png"
      },
      {
        name: "ANGULAR",
        imgAdj: "../../../../assets/images/angularLogo.png"
      },
      {
        name: "GCP",
        imgAdj: "../../../../assets/images/gcpLogo.png"
      }
    ];
    this.prodList2 = imgBan2;
    setInterval(() => {this.changeIcon();}, 40000);
  }
  dataLoading(sw) {
    this.selTab = 1;
  }

  statusChange(sw) {
    this.selTab = sw;
  }
  goToId1(){
    var el = document.getElementById('solutions');
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  }
  goToId2(){
    var el = document.getElementById('technologies');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToId3(){
    var el = document.getElementById('services');
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
  }
  goToId4(){
    var el = document.getElementById('contactUs');
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
  goToOurServices(id){
    sessionStorage.setItem("itemProductID",id);
    this.router.navigate(['our-services']);
  }
  goToOurProjects(){
    this.router.navigate(['our-projects']);
  }
  
  changeIcon(){
    this.slideIcons = !this.slideIcons; 
  }

}
