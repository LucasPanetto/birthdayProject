import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarddataComponent } from './carddata.component';

describe('CarddataComponent', () => {
  let component: CarddataComponent;
  let fixture: ComponentFixture<CarddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarddataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
