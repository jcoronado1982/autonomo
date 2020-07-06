import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-autonomo',
  templateUrl: './autonomo.component.html',
  styleUrls: ['./autonomo.component.sass']
})
export class AutonomoComponent implements OnInit {
  public myInterval = 30000;
  public selTab: number;
  public cont: number = 0;
  public blur = 0;
  public blur1: number = 2;
  public cardList = [];
  public slideIcons:boolean = false;
  goHomeSection: Subscription;
  constructor(private global:GlobalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selTab = 1;
    let imgBan = [
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
    this.cardList = imgBan;
    setInterval(() => {this.changeIcon();}, 10000);
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
    this.loadEffect();
  }
  loadEffect() {
    setTimeout(() => {
      this.blur = 0;
      if (this.cont < 9) {
        this.cont++;
        this.blur = 2;
        this.loadEffect();
      }
      this.missChart();
    }, 500);
  }
  missChart(){

  }
}
