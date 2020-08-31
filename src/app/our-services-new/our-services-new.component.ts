import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GlobalService } from '../global.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-our-services-new',
  templateUrl: './our-services-new.component.html',
  styleUrls: ['./our-services-new.component.sass'],
  encapsulation: ViewEncapsulation.None,  
  animations: [
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
export class OurServicesNewComponent implements OnInit {
  public idService;
  public menuMobile: boolean = false;
  public sending;
  orderForm: FormGroup;
  constructor(private global: GlobalService, private formBuilder: FormBuilder, private language: LanguageService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.idService = localStorage.getItem("idItem");
  }
  private createForm() {
    this.orderForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required]
    });
  }
  showMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }
  goToId1(i) {
    if (i == 0) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    else if (i == 1) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    else if (i == 2) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    else if (i == 3) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    else if (i == 4) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
  }
  goToIdM(i) {
    this.menuMobile = !this.menuMobile;
    if (i == 0) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    if (i == 1) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    if (i == 2) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    if (i == 3) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
    if (i == 4) {
      this.global.goHomeSection.next(i);
      sessionStorage.setItem("idSelected",i);
      this.router.navigate(['home']);
    }
  }
  clickHereInfra(){
    window.scroll(0,0);
    this.idService = 6;
  }
  backHome() {
    this.router.navigate(['home']);
  }
  sentForm() {
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
      this.global.notif(this.language.content.contact.right.sentAdvice);
      this.sending=true;
      this.sending=false;
    }
  }
}
