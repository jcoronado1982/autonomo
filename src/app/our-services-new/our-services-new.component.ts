import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services-new',
  templateUrl: './our-services-new.component.html',
  styleUrls: ['./our-services-new.component.sass']
})
export class OurServicesNewComponent implements OnInit {
  public idService;
  constructor(private router:Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.idService=localStorage.getItem("idItem");
  }
  backHome(){
    this.router.navigate(['home']);
  }
}
