import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.sass']
})
export class OurProjectsComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private global: GlobalService, private formBuilder: FormBuilder, private language: LanguageService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    window.scroll(0, 0);
  }
  private createForm() {
    this.orderForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required]
    });
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
    }
  }
}
