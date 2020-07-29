import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import {HttpClientModule} from '@angular/common/http';
import { NotificationModule } from './notification/notification.module';
import { NewsapiModule } from './newsapi/newsapi.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    HttpClientModule,
    NotificationModule,
    NewsapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
