import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
      question: new FormControl('', [Validators.required,
        Validators.minLength(4)]),
      options: new FormArray([
        new FormControl('', [Validators.required, Validators.minLength(4)]),
        new FormControl('', [Validators.required, Validators.minLength(4)]),
        new FormControl('', [validateSize]),
        new FormControl(''),
        new FormControl('')
      ])
    });

  }
  // Show the array of formControl
  get options(): FormArray{
    return this.mainForm.get('options') as FormArray;
  }

  // get getOption(){
  //
  //     return this.mainForm.options.get(0);
  //
  // }


  addOption(){
    if (this.options.length < 15) {
      this.options.push(new FormControl(''));
    }
    console.log("number of input", this.mainForm.value.options.length);
  }

  get question(){
    return this.mainForm.get('question');
  }


  onSubmit(){
    // this.submitted = true;
    if (this.mainForm.valid){
      alert('Form Submitted');
      console.table(this.mainForm.value);
    }
    else {
      alert("The form is shit");
    }
  }



}
