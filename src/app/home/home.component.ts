import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA  } from '@angular/material';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public tabActive='Dashboard';
  public selectBan;
  public currentList;
  public postpago=false;
  public prepago=false;
  public telefoniaFijo=false;
  public totalAccountList;
  public viewPaper=1;

  public billDueDateField;
  public billDateField;
  public lastPaymentAmountField;
  public billBalanceField;
  public paperless;
  public accountType;
  public accountSubtype;
  public type;
  public popPreguntasSeguridad;
  public token:string=sessionStorage.getItem("token");
  public subscribers;
  public subscriber;
  loadObserver: Subscription;
  
  public giftMessage = '';
  public nameSend;
  public gui;
  public cr='';
  constructor(private router:Router,public appComponent:AppComponent,private services: Service,private loadingScreenService:LoadingScreenService,private global:GlobalService, public dialog:MatDialog){}
  
  ngOnInit() {
    this.global.validateSession();
    this.loadObserver = this.global.loadObserver.subscribe((value:number) => {
      this.dataLoading(value)
    });
    this.selectBan=atob(sessionStorage.getItem("selectBan"));
    this.nameSend = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.firstNameField + ' ' + JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.lastNameField;
    this.lastPaymentAmountField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.lastPaymentAmountField;
    
    this.billBalanceField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billBalanceField;
    if(this.billBalanceField.search('CR')>-1){
      this.cr='CR';
      this.billBalanceField=parseFloat(this.billBalanceField);
    }
    else{
      this.cr='';
    }
    this.billDueDateField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billDueDateField;
    this.billDateField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billDateField;
    this.paperless = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).qualification.RefererResponse.paperless;
    this.accountType= JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.accountTypeField;
    this.accountSubtype= JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.accountSubtypeField;
    //if(this.prepago==true){
      this.subscribers=JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).SubscriberInfo;
      this.subscriber=this.subscribers[0].subscriberNumberField;
    //}
   
    
    this.popPreguntasSeguridad=JSON.parse(atob(sessionStorage.getItem("popPreguntasSeguridad")));
  }

  ngAfterViewInit(){
    if(this.prepago==true){
      /*this.services.updateToken(this.token,btoa(this.selectBan),this.subscriber).subscribe(data =>{
        if(data.hasError==false){
          sessionStorage.setItem("idCustomerCard",btoa(JSON.stringify(data.response)));
         this.GetGift1GBSendData();
        }
        else{
         this.GetGift1GBSendData();
          //mensaje que no se genero el token  
        }
      });*/
    }
    else{
      /*this.GetGift1GBSendData();*/
    }
    /*if(this.popPreguntasSeguridad==true){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef =this.dialog.open(PopupQuestionComponent, dialogConfig);
    }*/
  }
  initializeData(){
    this.global.refreshDataTo(this.token);
  }
  refreshDataTo(event:Event) {
    let index =parseInt(event.target["selectedIndex"]);
    let ban = this.currentList[index].account;
    sessionStorage.setItem("selectBan",btoa(ban));
    this.initializeData();
  }
  dataLoading(sw){
    this.selectBan=atob(sessionStorage.getItem("selectBan"));
    this.lastPaymentAmountField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.lastPaymentAmountField;
    this.billBalanceField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billBalanceField;
    this.accountType= JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.accountTypeField;
    this.accountSubtype= JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.accountSubtypeField;
    if(this.billBalanceField.search('CR')>-1){
      this.cr='CR';
      this.billBalanceField=parseFloat(this.billBalanceField);
    }
    else{
      this.cr='';
    }
    this.billDueDateField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billDueDateField;
    this.billDateField = JSON.parse(atob(sessionStorage.getItem("getAccountDetails"))).AccounInfo.billDateField;
    if(this.postpago==true){
      this.type="postpaid";
    }
    else if(this.prepago==true){
      this.type="prepaid";
    }
    else if(this.telefoniaFijo==true){
      this.type="fixed";
    }
    /*this.GetGift1GBSendData();*/
  }
  ngOnDestroy() {
    this.loadObserver.unsubscribe();
  }
  /*recibirRegalo(BANReceiver, Message, NameSender, GUI){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {BANReceiver:this.selectBan,Message:Message,NameSender:NameSender,GUI:GUI};
    const dialogRef =this.dialog.open(PopupGiftAcceptedComponent, dialogConfig);
    this.loadingScreenService.stopLoading();
    this.giftMessage = Message;
    this.nameSend = NameSender;
    this.gui = GUI;
  }*/
  /*GetGift1GBSendData(){
    this.services.getGift1GBSend(this.token, this.selectBan).subscribe(data=>{
     if (vm.runPrepaid === false) {
        this.loadingScreenService.stopLoading();
    }
    this.loadingScreenService.stopLoading();
    if (data.HasError === false) {
      if (data.Gift1GBsents.length > 0) {
          for (var i = 0; i < data.Gift1GBsents.length; i++) {
              if (i === 0) {
                  this.recibirRegalo(data.Gift1GBsents[i].BANReceiver,data.Gift1GBsents[i].Message,data.Gift1GBsents[i].NameSender,data.Gift1GBsents[i].GUI);
              }
          }
      }
    } 
    else {
      this.global.notif(data.ErrorDesc);
    }
    });
  }*/
  /*
  viewGiftExpired(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef =this.dialog.open(PopupGiftExpiredComponent, dialogConfig);
  }*/
}

