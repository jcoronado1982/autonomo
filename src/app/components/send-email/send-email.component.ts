import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';
import { Service } from 'src/app/services';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.sass']
})
export class SendEmailComponent implements OnInit {
  public sending;
  orderForm: FormGroup;
  constructor(private services: Service, private loadingScreenService: LoadingScreenService,private global: GlobalService,private formBuilder: FormBuilder,private language: LanguageService,) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  private createForm() {
    this.orderForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      emailClient: ['', Validators.required],
      projectType: ['', Validators.required],
      projectDescription: ['', Validators.required]
    });
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
}
