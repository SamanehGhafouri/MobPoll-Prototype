import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./form/form.component";
import {RouterModule, Routes} from "@angular/router";
import {PopupWindowComponent} from "./popup-window/popup-window.component";
import {CopyToClipboardComponent} from "./copy-to-clipboard/copy-to-clipboard.component";

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'popup', component: PopupWindowComponent},
  {path: 'clipboard', component: CopyToClipboardComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
