import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarddateComponent } from './carddate.component';

describe('CarddateComponent', () => {
  let component: CarddateComponent;
  let fixture: ComponentFixture<CarddateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
