import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-plans-box',
  templateUrl: './plans-box.component.html',
  styleUrls: ['./plans-box.component.sass']
})
export class PlansBoxComponent implements OnInit {
  public selTab:number;
  constructor(private language: LanguageService) { }

  ngOnInit(): void {
    this.selTab=1;
  }
  statusChange(sw) {
    this.selTab = sw;
  }
}
