import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprareilsComponent } from './apprareils/apprareils.component';
import { AppareilItemComponent } from './appareil-item/appareil-item.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    AppComponent,
    ApprareilsComponent,
   
    AppareilItemComponent,
        ContactComponent,
        HeadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
