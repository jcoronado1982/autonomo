import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIconsComponent } from './carousel-icons.component';

describe('CarouselIconsComponent', () => {
  let component: CarouselIconsComponent;
  let fixture: ComponentFixture<CarouselIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
