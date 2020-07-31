import { Component } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router:Router,private language:LanguageService){

  }
  ngOnInit(){    
    this.language.languagefile();
  }
}
