import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { LoadingScreenService } from "../../services/loading-screen/loading-screen.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-loading-screen-min',
  templateUrl: './loading-screen-min.component.html',
  styleUrls: ['./loading-screen-min.component.sass']
})
export class LoadingScreenMinComponent implements OnInit, OnDestroy {

  @Input() status:boolean;
  @Input() session:number;
  @Input() width:string;
  @Input() heigth:string;
  loadingMin: boolean = false;
  loadingMin2: boolean = false;
  loadingSubscription: Subscription;
  loadingSubscription2: Subscription;

  constructor(private loadingScreenService: LoadingScreenService) {}

  ngOnInit() {

    if(this.status!=undefined){
      if(this.session==1){
        this.loadingMin=this.status;
      }
      if(this.session==2){
        this.loadingMin2=this.status;
      }
    }
   
    this.loadingSubscription = this.loadingScreenService.loadingMinStatus.subscribe((value:boolean) => {
      this.loadingMin = value;
    });
    this.loadingSubscription2 = this.loadingScreenService.loadingMin2Status.subscribe((value:boolean) => {
      this.loadingMin2 = value;
    });
    
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    this.loadingSubscription2.unsubscribe();
  }
}