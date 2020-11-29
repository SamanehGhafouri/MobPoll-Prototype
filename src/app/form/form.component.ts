import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  mainForm: FormGroup
  constructor() {
    this.mainForm = new FormGroup({
      question: new FormControl(''),
      options: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
      ])
    });
  }

  addOption(){
    if (this.mainForm.value.options.length < 15) {
      this.mainForm.value.options.push(new FormControl(''));
    }
    console.log("number of input", this.mainForm.value.options.length);
  }

  ngOnInit(){

  }

}
