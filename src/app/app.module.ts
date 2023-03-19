import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './compoent/dashboard/dashboard.component';
import { TestComponent } from './compoent/test/test.component';

//import routes
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ThreedaysWeatherComponent } from './compoent/dashboard/threedays-weather/threedays-weather.component';
import { OnedayWeatherComponent } from './compoent/dashboard/threedays-weather/oneday-weather/oneday-weather.component';
import { WeeklyWeatherComponent } from './compoent/dashboard/weekly-weather/weekly-weather.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, TestComponent, ThreedaysWeatherComponent,OnedayWeatherComponent, WeeklyWeatherComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
