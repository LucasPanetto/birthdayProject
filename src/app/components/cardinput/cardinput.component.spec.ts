import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardinputComponent } from './cardinput.component';

describe('CardinputComponent', () => {
  let component: CardinputComponent;
  let fixture: ComponentFixture<CardinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardinputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
