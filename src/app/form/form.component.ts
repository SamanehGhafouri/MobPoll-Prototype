import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
        new FormControl('')
      ])
    });

  }
  // Show the array of formControl
  get options(){
    return this.mainForm.get('options') as FormArray;
  }
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
