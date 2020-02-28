import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingScreenMinComponent } from './loading-screen-min.component';
describe('LoadingScreenComponent', () => {
  let component: LoadingScreenMinComponent;
  let fixture: ComponentFixture<LoadingScreenMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingScreenMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});