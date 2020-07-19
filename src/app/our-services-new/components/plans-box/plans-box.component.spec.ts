import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansBoxComponent } from './plans-box.component';

describe('PlansBoxComponent', () => {
  let component: PlansBoxComponent;
  let fixture: ComponentFixture<PlansBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
