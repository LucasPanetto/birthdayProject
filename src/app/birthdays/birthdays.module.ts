import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdaysPageRoutingModule } from './birthdays-routing.module';

import { BirthdaysPage } from './birthdays.page';
import { HeaderComponent } from '../components/header/header.component';
import { SegmentComponent } from '../components/segment/segment.component';
import { TextinformationComponent } from '../components/textinformation/textinformation.component';
import { CarddataComponent } from '../components/carddata/carddata.component';
import { CardinputComponent } from '../components/cardinput/cardinput.component';
import { CardlistComponent } from '../components/cardlist/cardlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdaysPageRoutingModule
  ],
  declarations: [BirthdaysPage, HeaderComponent, SegmentComponent, TextinformationComponent, CarddataComponent, CardinputComponent, CardlistComponent]
})
export class BirthdaysPageModule { }
