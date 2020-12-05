import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// Custom validation for poll question that needs to be at least 2 words
function validateSize(form: FormControl) {
  let poll_option_input = form.value;
  poll_option_input = poll_option_input.trim(); // removes spaces from left and right of string
  poll_option_input = poll_option_input.replace(/\s\s+/g, ' '); // removes extra spaces in between words
  let option_input_words = poll_option_input.split(" "); // creates an array of words from string

  console.log("Option Input Words", option_input_words)
  console.log("Validate Size Input Value", form.value, option_input_words.length)

  return option_input_words.length < 2 ? {
    invalidSize: true
  } : null;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  mainForm: FormGroup;
  constructor() {
  }

  ngOnInit(): void{
    this.mainForm = new FormGroup({
      question: new FormControl('', [validateSize]),
      options: new FormArray([
        new FormControl('', [Validators.required]),
        new FormControl('', [Validators.required]),
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
      ])
    });

  }

  // Get the fomControl question
  get question(){
    return this.mainForm.get('question');
  }

  // Get the array of formControl
  get options(): FormArray{
    return this.mainForm.get('options') as FormArray;
  }

  addOption(){
    if (this.options.length < 15) {
      this.options.push(new FormControl(''));
    }
    console.log("number of input", this.mainForm.value.options.length);
  }

  onSubmit(){

    if (this.mainForm.valid){
      alert('Form Submitted');
      console.table(this.mainForm.value);
    }
    else {
      this.validateFormGroupField(this.mainForm);
      this.validateFormArrayFields(this.options);
    }
  }

  //Validating FormGroup Fields (question)
  validateFormGroupField(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const  control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }
      else if (control instanceof FormGroup) {
        this.validateFormGroupField(control);
      }
    })
  }

  //Validating FormArray Fields (options)
  validateFormArrayFields(formGroup: FormArray){
    Object.keys(formGroup.controls).forEach(field => {
      const  control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }
      else if (control instanceof FormArray) {
        this.validateFormArrayFields(control);
      }
    })
  }




}
