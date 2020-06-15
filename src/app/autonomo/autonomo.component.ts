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
  
  goToOurServcies(){
    this.router.navigate(['our-services']);
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
        this.missChart();
      }, 500);
  }
  
  missChart(){
    setTimeout(() => {
      this.cont = 0;
      this.loadEffect();
    },60000);
  }
}
