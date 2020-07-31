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
        let language=this.languageNavigator();
        if(language=="es"){
          this.content=data.es;
        }
        else if(language=="en"){
          this.content=data.en;
        }
        else if(language=="pt"){
          this.content=data.en;
        }
        else{
          this.content=data.en;
        }
    }); 
  }

  changeLanguage(language:string){
    this.http.get("../../assets/language.json").subscribe((data:any)=>{
      if(language=="es"){
        this.content=data.es;
      }
      else if(language=="en"){
        this.content=data.en;
      }
      else if(language=="pt"){
        this.content=data.en;
      }
      else{
        this.content=data.en;
      }
    }); 
  }

  languageNavigator(){
    var language=String(window.navigator.language);
    language=language.substring(0,2);
    return language;
  }
}
