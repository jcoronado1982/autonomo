import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AlertasComponent } from './alertas/alertas.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule} from '@angular/common/http';
import { Service } from './services';
import { Bridge } from './bridge';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoadingScreenMinComponent } from './components/loading-screen-min/loading-screen-min.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OptionsComponent } from './components/options/options.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { AutonomoComponent } from './autonomo/autonomo.component';
import { CarouselProductsComponent } from './autonomo/components/carousel-products/carousel-products.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AlertasComponent,
    HomeComponent,
    MenuComponent,
    LoadingScreenComponent,
    LoadingScreenMinComponent,
    OptionsComponent,
    CollapseComponent,
    SkeletonComponent,
    AutonomoComponent,
    CarouselProductsComponent,
    OurServicesComponent,
    OurProjectsComponent,
  ],
  imports: [
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path:'login',
         component:LoginComponent
      },
      {
        path:'home',
         component:HomeComponent
      },
      {
        path:'skeleton',
         component:SkeletonComponent
      },
      {
        path:'autonomo',
         component:AutonomoComponent
      },
      {
        path:'our-services',
         component:OurServicesComponent
      },
      {
        path:'',
        component:AutonomoComponent
      },
  ]),
    CarouselModule.forRoot()],
  providers: [Service,Bridge,LoadingScreenComponent],
  bootstrap: [AppComponent],
  entryComponents:[AlertasComponent]
})
export class AppModule { }
