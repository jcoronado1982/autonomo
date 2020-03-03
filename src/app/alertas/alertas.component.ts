import { Component, OnInit,ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class AlertasComponent implements OnInit {
  public btmOk:boolean=true;
  public labelOk:string='OK';
  public btmConfirm:boolean=false;
  public labelSi:string='SI';
  public labelNo:string='NO'; 
  public colorSi:string='';
  public colorNo:string=''; 
  public btmSession:boolean=false; 
  public title:boolean=true;
  public session:boolean=false;
  public labelTitle:string='Aviso';
  public labelTitleHtml:string;
  public menssageError:string;
  public messageHtml:boolean=false;
  public labelHtml:string;
  public inverse:boolean=false;
  constructor(public matDialogRef:MatDialogRef<AlertasComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private router:Router) {
    if(data.session!=undefined){
      this.session=data.session;
    }
    if(data.inverse!=undefined){
      this.inverse=data.inverse;
    }
    if(data.colorSi!=undefined){
      this.colorSi=data.colorSi;
    }
    if(data.colorNo!=undefined){
      this.colorNo=data.colorNo;
    }
    if(data.title!=undefined){
      this.title=data.title;
    }
    if(data.labelTitle!=undefined){
      this.labelTitle=data.labelTitle;
    }
    if(data.labelTitleHtml!=undefined){
      this.labelTitleHtml=data.labelTitleHtml;
    }
    if(data.menssageError!=undefined){
      this.menssageError=data.menssageError;
    }
    if(data.labelOk!=undefined){
      this.labelOk=data.labelOk;
    }
    if(data.btmOk!=undefined){
      this.btmOk=data.btmOk;
    }
    if(data.btmConfirm!=undefined){
      this.btmConfirm=data.btmConfirm;
      if(this.btmConfirm==true){
        this.btmOk=false;
      }
    }
    if(data.messageHtml!=undefined){
      if(data.messageHtml==true){
        this.messageHtml=true;
        let labelHtml=data.message.replace('href="http://miclaroreferals.claroinfo.com/forgotpassword"','href="/forgotpassword"');
        this.labelHtml=labelHtml.replace('target="_blank"','');
      }
    }
    if(data.btmSession!=undefined){
      this.btmSession=data.btmSession;
    }
    if(data.labelSi!=undefined){
      this.labelSi=data.labelSi;
    }
    if(data.labelNo!=undefined){
      this.labelNo=data.labelNo;
    }
  }
  ngOnInit() {}
  continue(){
    this.matDialogRef.close('continue');
  }
  public cancel(){
    this.matDialogRef.close('cancel');
  }
  public ok(){
    this.matDialogRef.close();
  }
  public okSession(){
    this.router.navigate(['login']);
    this.matDialogRef.close();
  }
}