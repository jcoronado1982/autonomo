import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public content;
  constructor(private http:HttpClient) {
  }
  languagefile(){
    this.http.get("../../assets/language.json").subscribe((data:any)=>{
        var language=String(window.navigator.language);
        language=language.substring(0,2);
        if(language=="es"){
          console.log("Español");
          this.content=data.es;
          console.log(this.content);
        }
        if(language=="en"){
          console.log("Ingles");
          this.content=data.en;
        }
    });
    
  }
}
