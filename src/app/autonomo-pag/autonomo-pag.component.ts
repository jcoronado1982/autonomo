import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autonomo-pag',
  templateUrl: './autonomo-pag.component.html',
  styleUrls: ['./autonomo-pag.component.sass']
})
export class AutonomoPagComponent implements OnInit {
  public myInterval = 30000;
  public content:object;
  public content1:object;
  constructor() { }

  ngOnInit() {
    this.content=[
      {
      image: '../../assets/images/location.png',
      catName: 'fghjhgf'
    },
    {
      image: '../../assets/images/comunication.png',
      catName: 'abcdef'
    }
  ];
  }

}
