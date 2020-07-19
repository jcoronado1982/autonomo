import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public goSolutions;
  constructor(private global:GlobalService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  backhome(){
    this.router.navigate(['autonomo']);
  }
} 
