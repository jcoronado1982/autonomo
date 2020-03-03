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
  public imgOk = true;
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
      if (this.cont<9){
        alert(this.cont);
        this.cont;
        this.cont++;
        alert(this.cont);
        this.loadEffect();
      }
      else{
        this.cont=9;
      }
    }, 2500);
  }
}
