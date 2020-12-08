import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormOptionsComponent } from './form-options/form-options.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormOptionsComponent,
    NgbModalComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
