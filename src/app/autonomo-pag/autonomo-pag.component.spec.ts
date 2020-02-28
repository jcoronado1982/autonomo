import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomoPagComponent } from './autonomo-pag.component';

describe('AutonomoPagComponent', () => {
  let component: AutonomoPagComponent;
  let fixture: ComponentFixture<AutonomoPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomoPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
