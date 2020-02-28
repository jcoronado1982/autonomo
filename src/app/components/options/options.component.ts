import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent implements OnInit {
  public statusOn:number=0;
  public statusRadio=[false,false]
  constructor(private global:GlobalService) { }

  ngOnInit() {
  }
  changeType(type:number){
    this.global.validateSession();
    this.statusOn=type;
    if(type==1){
      this.statusRadio[0]=true;
      this.statusRadio[1]=false;
    }
    else{
      this.statusRadio[0]=false;
      this.statusRadio[1]=true;
    }
  }
}