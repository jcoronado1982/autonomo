import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.sass']
})
export class OurServicesComponent implements OnInit {
  public idService;
  constructor() { }

  ngOnInit() {
    this.idService=parseInt(sessionStorage.getItem("itemProductID"));
    console.log(this.idService);
  }

}
