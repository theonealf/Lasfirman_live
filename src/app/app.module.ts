import { appsettings } from './appsettings/appsettings';
import { AppGlobalErrorHandler } from './../assets/appGlobalErrorHandler';
import { ErrorHandler } from '@angular/core';
import { WpServiceService } from './services/wpService/wp-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BokhaxaComponent } from './bokhaxa/bokhaxa.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LasklubbComponent } from './lasklubb/lasklubb.component';
import { OmlasfirmanComponent } from './omlasfirman/omlasfirman.component';
import { UndersidaComponent } from './undersida/undersida.component';
import { StartComponent } from './start/start.component';
import { PoetryComponent } from './poetry/poetry.component';
import { ForelasningComponent } from './forelasning/forelasning.component';
import { BibbloterapiComponent } from './bibbloterapi/bibbloterapi.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { HemComponent } from './hem/hem.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    BokhaxaComponent,
    NavigationComponent,
    LasklubbComponent,
    OmlasfirmanComponent,
    UndersidaComponent,
    StartComponent,
    PoetryComponent,
    ForelasningComponent,
    BibbloterapiComponent,
    PagenotfoundComponent,
    HemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WpServiceService,
    {provide: ErrorHandler, useClass: AppGlobalErrorHandler},
    appsettings,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
