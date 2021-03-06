import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Service } from '../services';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { GlobalService } from '../global.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from "rxjs";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { LanguageService } from '../language.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  goHomeSection: Subscription;
  public prodList = [];
  public prodList2 = [];
  public slideIcons: boolean = false;
  public menuMobile: boolean = false;
  public changedLanguage: boolean = false;
  public elementAux: number = parseInt(sessionStorage.getItem("idSelected"));
  orderForm: FormGroup;
  public sending;
  constructor(private formBuilder: FormBuilder, private language: LanguageService, public AngularFireAnalytics: AngularFireAnalytics, private router: Router, public appComponent: AppComponent, private services: Service, private loadingScreenService: LoadingScreenService, private global: GlobalService, public dialog: MatDialog) {
    this.AngularFireAnalytics.setCurrentScreen("Home");
    this.AngularFireAnalytics.logEvent("Home-Screenview");
    this.createForm();
  }

  ngOnInit() {
    if(this.language.languageNavigator()=='en'){
      this.changedLanguage=true;
    }
    else{
      this.changedLanguage=false;
    }
    if (this.elementAux != null || this.elementAux != NaN) {
      switch (this.elementAux) {
        case 0:
          window.scroll({
            top: 555,
            left: 100,
            behavior: 'smooth'
          });
          break;
        case 1:
          window.scroll({
            top: 1550,
            left: 100,
            behavior: 'smooth'
          });
          break;
        case 2:
          window.scroll({
            top: 2500,
            left: 100,
            behavior: 'smooth'
          });
          break;
        case 3:
          window.scroll({
            top: 2950,
            left: 100,
            behavior: 'smooth'
          });
          break;
        case 4:
          this.goToId1(2);
          break;
      }
    }
    else {
      window.scroll(0, 0);
    }
    setTimeout(() => {
      sessionStorage.removeItem("idSelected");
    }, 10000);
    let imgBan = [
      {
        name: "KOTLIN",
        imgAdj: "../../../../assets/images/kotlin.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "PYTHON",
        imgAdj: "../../../../assets/images/pyLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "CSHARP",
        imgAdj: "../../../../assets/images/csharpLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "ANGULAR",
        imgAdj: "../../../../assets/images/angularLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "REACT",
        imgAdj: "../../../../assets/images/reactLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "SQL",
        imgAdj: "../../../../assets/images/sqlSLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "GCP",
        imgAdj: "../../../../assets/images/gcpLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      },
      {
        name: "AWS",
        imgAdj: "../../../../assets/images/awsNewLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "65px 0px"
      }

    ];
    this.prodList = imgBan;
    let imgBan2 = [
      {
        name: "PHP",
        imgAdj: "../../../../assets/images/phpLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      }, {
        name: "CLOUD COMPUTING",
        imgAdj: "../../../../assets/images/cloudComputing.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "MYSQL",
        imgAdj: "../../../../assets/images/mysqlNewLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "JAVA",
        imgAdj: "../../../../assets/images/java.svg",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "ORACLE",
        imgAdj: "../../../../assets/images/oracleNewLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "POSTGRESQL",
        imgAdj: "../../../../assets/images/postgresql.svg",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "AZURE",
        imgAdj: "../../../../assets/images/azure.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      },
      {
        name: "IONIC",
        imgAdj: "../../../../assets/images/ionicLogo.png",
        nameofclass: "py-icon",
        paddingIcon: "20px 0px"
      }

    ];
    this.prodList2 = imgBan2;
    setInterval(() => { this.changeIcon(); }, 30000);
  }
  private createForm() {
    this.orderForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required]
    });
  }
  changeLanguage() {
    this.changedLanguage = !this.changedLanguage;
    if(this.changedLanguage){
      this.language.changeLanguage('en');
    }
    else{
      this.language.changeLanguage('es');
    }
  }
  changeIcon() {
    this.slideIcons = !this.slideIcons;
  }
  showMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }
  gotoId(value) {
    localStorage.setItem("idItem", value);
    this.router.navigate(['our-services']);
  }
  gotoOurP() {
    //this.router.navigate(['our-projects']);
  }
  seeDetails() {
    var el = document.getElementById('howWeWorkMob');
    el.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  }
  goToId1(i) {
    if (i == 0) {
      var el = document.getElementById('aboutUs');
      el.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }
    else if (i == 1) {
      window.scroll({
        top: 1550,
        left: 100,
        behavior: 'smooth'
      });
    }
    else if (i == 2) {
      var el = document.getElementById('howWeWork');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    }
    else if (i == 3) {
      var el = document.getElementById('projects');
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
    }
    else if (i == 4) {
      var el = document.getElementById('contactUs');
      el.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }

  }
  goToIdM(i) {
    this.menuMobile = !this.menuMobile;
    if (i == 0) {
      window.scroll({
        top: 660,
        left: 100,
        behavior: 'smooth'
      });
    }
    if (i == 1) {
      window.scroll({
        top: 1765,
        left: 100,
        behavior: 'smooth'
      });
    }
    if (i == 2) {
      window.scroll({
        top: 4800,
        left: 100,
        behavior: 'smooth'
      });
    }
    if (i == 3) {
      window.scroll({
        top: 5520,
        left: 100,
        behavior: 'smooth'
      });
    }
    if (i == 4) {
      window.scroll({
        top: 6200,
        left: 100,
        behavior: 'smooth'
      });
    }
  }
  goToOurProjects(){
    window.open('https://theruby.net', '_blank');
  }
  sendContact() {
    if (this.orderForm.value.nameClient == '') {
      this.global.notif(this.language.content.contact.right.nameAdvice);
    }
    else if (this.orderForm.value.emailClient == '') {
      this.global.notif(this.language.content.contact.right.emailAdvice);
    }
    else if (this.global.validarEmail(this.orderForm.value.emailClient) == false) {
      this.global.notif(this.language.content.contact.right.emailInvalidAdvice);
    }
    else if (this.orderForm.value.projectType == '') {
      this.global.notif(this.language.content.contact.right.typeAdvice);
    }
    else if (this.orderForm.value.projectDescription == '') {
      this.global.notif(this.language.content.contact.right.descriptionAdvice);
    }
    else {
      this.sending=true;
      this.services.contactUs(this.orderForm.value.nameClient,this.orderForm.value.emailClient,this.orderForm.value.projectType,this.orderForm.value.projectDescription).subscribe(data => {
        this.sending=false;
        if (data.hasError == false) {
          this.global.notif(this.language.content.contact.right.sentAdvice);   
        }
        else {
          this.loadingScreenService.stopLoading();
          this.global.notif(data.errorDesc);
        }
      }, error => {
        this.sending=false;
        this.global.notif(this.language.content.contact.right.sentAdvice);   
      });
    }
  }
  resetForm() {
    (<HTMLFormElement>document.getElementById("formAutonomo")).reset();
  }
}
