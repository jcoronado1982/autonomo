import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesNewComponent } from './our-services-new.component';

describe('OurServicesNewComponent', () => {
  let component: OurServicesNewComponent;
  let fixture: ComponentFixture<OurServicesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
