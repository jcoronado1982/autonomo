import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.sass']
})
export class CarouselProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goToOurServices(id){
    sessionStorage.setItem("itemProductID",id);
    this.router.navigate(['our-services']);
  }
}
