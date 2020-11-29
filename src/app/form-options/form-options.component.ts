import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'app-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.css']
})
export class FormOptionsComponent implements OnInit {
  options = [];
  constructor(private formComponent: FormComponent) {
    this.options = this.formComponent.mainForm.value.options
  }

  ngOnInit(): void {
  }

}
