import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass']
})
export class SkeletonComponent implements OnInit {
  public myInterval = 30000;

  constructor() { }

  ngOnInit() {
  }

}
