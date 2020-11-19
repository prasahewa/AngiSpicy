import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DetailSevices } from './detail.services';

import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputFormReactComponent } from './input-form-react/input-form-react.component';
import { InputFormReactTwoComponent } from './input-form-react-two/input-form-react-two.component';
import { DetailIndComponent } from './detail-ind/detail-ind.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CarouselComponent,
    DetailListComponent,
    InputFormComponent,
    ModalComponent,
    InputFormReactComponent,
    InputFormReactTwoComponent,
    DetailIndComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [DetailSevices],
  bootstrap: [AppComponent]
})
export class AppModule { }
