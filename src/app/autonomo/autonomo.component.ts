import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Subscription } from "rxjs";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-autonomo',
  templateUrl: './autonomo.component.html',
  styleUrls: ['./autonomo.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AutonomoComponent implements OnInit {
  public myInterval = 30000;
  public selTab: number;
  public cont: number = 0;
  public blur = 0;
  public blur1: number = 2;
  public prodList = [];
  public prodList2 = [];
  public slideIcons:boolean = false;
  goHomeSection: Subscription;
  orderForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private global:GlobalService, private router: Router, private route: ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit() {
    this.selTab = 1;
    let imgBan = [
      {
        name: "KOTLIN",
        imgAdj: "../../../../assets/images/kotlin.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "PYTHON",
        imgAdj: "../../../../assets/images/pyLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "CSHARP",
        imgAdj: "../../../../assets/images/csharpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "ANGULAR",
        imgAdj: "../../../../assets/images/angularLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "REACT",
        imgAdj: "../../../../assets/images/reactLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "SQL",
        imgAdj: "../../../../assets/images/sqlSLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "GCP",
        imgAdj: "../../../../assets/images/gcpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },      
      {
        name: "AWS",
        imgAdj: "../../../../assets/images/awsNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      }      
      
    ];
    this.prodList = imgBan;
    let imgBan2 = [      
      {
        name: "PHP",
        imgAdj: "../../../../assets/images/phpLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },{
        name: "CLOUD COMPUTING",
        imgAdj: "../../../../assets/images/cloudComputing.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "MYSQL",
        imgAdj: "../../../../assets/images/mysqlNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "JAVA",
        imgAdj: "../../../../assets/images/java.svg",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "ORACLE",
        imgAdj: "../../../../assets/images/oracleNewLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },  
      {
        name: "POSTGRESQL",
        imgAdj: "../../../../assets/images/postgresql.svg",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "AZURE",
        imgAdj: "../../../../assets/images/azure.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      },
      {
        name: "IONIC",
        imgAdj: "../../../../assets/images/ionicLogo.png",
        nameofclass:"py-icon",
        paddingIcon:"20px 0px"
      }     
      
    ];
    this.prodList2 = imgBan2;
    setInterval(() => {this.changeIcon();}, 30000);
  }
  private createForm() {
    this.orderForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required]
    });
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
  }
  sentForm(){
    if(this.orderForm.value.nameClient == ''){
      this.global.notif("Please write the client name.");
    }
    else if(this.orderForm.value.emailClient == ''){
      this.global.notif("Please write the client email.");
    }
    else if (this.global.validarEmail(this.orderForm.value.emailClient) == false) {
      this.global.notif("The e-mail has an invalid format.");
    }
    else if(this.orderForm.value.projectType == ''){
      this.global.notif("Please select the project type.");
    }
    else if(this.orderForm.value.projectDescription == ''){
      this.global.notif("Please write the project description.");
    }
    else{
      this.global.notif("Thanks for your sending.");
    }
  }
  resetForm(){
    (<HTMLFormElement>document.getElementById("formAutonomo")).reset();
  }
}
 