import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormOptionsComponent } from './form-options/form-options.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { IconsComponent } from './icons/icons.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormOptionsComponent,
    NgbModalComponent,
    IconsComponent,
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
