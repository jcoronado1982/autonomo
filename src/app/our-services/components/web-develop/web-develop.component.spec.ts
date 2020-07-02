import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopComponent } from './web-develop.component';

describe('WebDevelopComponent', () => {
  let component: WebDevelopComponent;
  let fixture: ComponentFixture<WebDevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
