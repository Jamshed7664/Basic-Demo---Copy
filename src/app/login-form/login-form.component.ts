import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private myServices:MyServicesService) { }
  loginForm:FormGroup;
  ngOnInit(): void {
   this.loginForm= this.initiateForm()
  }
  initiateForm(){
     const fb=this.formBuilder.group({
     'name' :new FormControl(null,Validators.required),
     'email' :new FormControl(null,[Validators.required,Validators.email]),
     'address' :new FormControl(null,Validators.required),
     'pin' :new FormControl(null,Validators.required),
     'skills' : new FormArray([
       new FormControl(null,Validators.required)
     ])
     })
     return fb;
  }
  createFormArray(){
    const fg= this.formBuilder.group(new FormControl())
    return fg;
  }
  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.controls['name'].markAllAsTouched();
      this.loginForm.controls['email'].markAllAsTouched();
      this.loginForm.controls['address'].markAllAsTouched();
      this.loginForm.controls['pin'].markAllAsTouched();
      this.loginForm.controls['skills'].markAllAsTouched();
    }else{
      this.myServices.onSubmit(this.loginForm.value).subscribe(res =>{
        console.log(res);

      })
      console.log(this.loginForm.value);
    }

  }
  addSkill(){
 (<FormArray>this.loginForm.get('skills')).push(new FormControl(null,Validators.required))
  }
  removeSkills(index){
 (<FormArray>this.loginForm.get('skills')).removeAt(index);
  }

}
