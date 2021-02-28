import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { CoreModule } from '@core/core.module';

const ANGULAR_MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  AppRoutingModule,
];

const CUSTOM_MODULES = [CoreModule, SharedModule];

@NgModule({
  declarations: [AppComponent],
  imports: [...ANGULAR_MODULES, ...CUSTOM_MODULES, HotToastModule.forRoot()],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
