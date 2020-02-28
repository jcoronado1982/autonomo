import { Component, OnDestroy, OnInit,Input } from '@angular/core';
import { LoadingScreenService } from "../../services/loading-screen/loading-screen.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass']
})
export class LoadingScreenComponent implements OnInit {

   @Input() status:boolean;
  loading: boolean = false;
  loadingSubscription: Subscription;
  constructor(private loadingScreenService: LoadingScreenService) {}

  ngOnInit() {
    if(this.status!=undefined){
      this.loading=this.status;
    }
    this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value:boolean) => {
      this.loading = value;
    });
  }
  /*
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }*/
  
}