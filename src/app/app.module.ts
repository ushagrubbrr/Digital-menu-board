
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TemplateoneComponent } from './templateone/templateone.component';
import { TemplatetwoComponent } from './templatetwo/templatetwo.component';
import { TemplatethreeComponent } from './templatethree/templatethree.component';
import { TemplatefourComponent } from './templatefour/templatefour.component';
import { TemplatefiveComponent } from './templatefive/templatefive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateoneComponent,
    TemplatetwoComponent,
    TemplatethreeComponent,
    TemplatefourComponent,
    TemplatefiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
