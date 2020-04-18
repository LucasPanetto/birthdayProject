import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextinformationComponent } from './textinformation.component';

describe('TextinformationComponent', () => {
  let component: TextinformationComponent;
  let fixture: ComponentFixture<TextinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextinformationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
