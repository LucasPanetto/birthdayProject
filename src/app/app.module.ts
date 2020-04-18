import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SegmentComponent } from './components/segment/segment.component';
import { TextinformationComponent } from './components/textinformation/textinformation.component';
import { CarddataComponent } from './components/carddata/carddata.component';
import { CardinputComponent } from './components/cardinput/cardinput.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SegmentComponent,TextinformationComponent, CarddataComponent, CardinputComponent, CardlistComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
