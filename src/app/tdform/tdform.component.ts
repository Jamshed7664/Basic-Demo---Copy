import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {
  @ViewChild('f') simpleForm: NgForm
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm()
  }
  change() {
    this.simpleForm.form.patchValue({
      name: 'Jamshed',
      email: 'jmd.amd786@gmail.com',
      // address :'Raipur Ghunsi',
      // gender :'Male'
    })
  }
  gender = [
    { name: 'Male' },
    { name: 'Female' },
  ];
  onSubmit() {
    console.log(this.simpleForm.value);
    if (this.simpleForm.invalid) {
      this.simpleForm.form.controls['name'].markAsTouched();
      this.simpleForm.form.controls['email'].markAsTouched();
      this.simpleForm.form.controls['address'].markAsTouched();
      this.simpleForm.form.controls['gender'].markAsTouched();
    } else {
      this.simpleForm.form.reset();
    }
  }
  reactiveForm: FormGroup;
  myReactiveForm() {
    this.reactiveForm = new FormGroup({
      'uerData': new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('Male', [Validators.required, Validators.email]),
      hobbies: new FormArray([])
    })
  }
  addHobbies() {
    let controls = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('hobbies')).push(controls)
  }
  submit() {
    console.log(this.reactiveForm.value);

  }
}
