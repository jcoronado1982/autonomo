import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services-new',
  templateUrl: './our-services-new.component.html',
  styleUrls: ['./our-services-new.component.sass']
})
export class OurServicesNewComponent implements OnInit {
  public idService;
  constructor() { }

  ngOnInit(): void {
    this.idService=localStorage.getItem("idItem");
  }

}
