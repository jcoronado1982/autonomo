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
  public cont : number = 0;
  public blur = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selTab = 1;
    this.getId();
    this.loadEffect();
  }
  dataLoading(sw) {
    this.selTab = 1;
    this.getId();
  }

  statusChange(sw) {
    this.selTab = sw;
  }

  getId() {
    if (this.route.firstChild) {
      var id = this.route.firstChild.snapshot.params.id;
      if (id == '1') {
        this.selTab = 1;
      }
      else if (id == '2') {
        this.selTab = 2;
      }
      else if (id == '3') {
        this.selTab = 3;
      }
      else {
        this.selTab = 1;
        this.router.navigate(['autonomo']);
      }
    }
  }
  loadEffect(){
    setTimeout(() => {
      this.blur=0;
      if (this.cont<9){
        this.cont++;
        this.blur=2;
        this.loadEffect();
      }
      else{
        this.cont=9;
        this.blur=2;
      }
    }, 3000);
  }
}
