import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormOptionsComponent } from './form-options/form-options.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { IconsComponent } from './icons/icons.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormOptionsComponent,
    NgbModalComponent,
    IconsComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
