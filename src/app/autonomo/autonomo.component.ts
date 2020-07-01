import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selTab = 1;
    this.loadEffect();
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
  loadEffect() {
      setTimeout(() => {
        this.blur = 0;
        if (this.cont < 9) {
          this.cont++;
          this.blur = 2;
          this.loadEffect();
        }
        else {
          this.cont = 9;
          this.blur = 2;
        }
        //this.missChart();
      }, 500);
  }
  
  /*missChart(){
    setTimeout(() => {
      this.cont = 1;
      this.loadEffect();
    },60000);
  }*/
}
