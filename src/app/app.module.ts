import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DetailSevices } from './detail.services';
import { DetailIndComponent } from './detail-ind/detail-ind.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CarouselComponent,
    DetailListComponent,
    InputFormComponent,
    DetailIndComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DetailSevices],
  bootstrap: [AppComponent]
})
export class AppModule { }
