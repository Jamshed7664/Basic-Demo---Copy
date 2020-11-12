import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyServicesService } from '../my-services.service';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.css']
})
export class LoginFirebaseComponent implements OnInit {

  constructor(private myServices: MyServicesService,private notificationService:NotificationsService) { }
  loginForm: FormGroup;
  v_pass: any = true;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    })
  }
  btnTxt: boolean = true;
  changeBtnText() {
    this.btnTxt = !this.btnTxt;

  }
  errorMsg=null;
  errExist: boolean = false;
  loader: boolean = false;
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.controls['email'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
    } else {
      if (this.btnTxt) {
        //Sign up Method
        this.loader = true;
        this.errExist = false;
        this.myServices.signUp(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
          this.loader = false;
          console.log(res);
          this.notificationService.showSuccess("Account Created Successfully !",'Success')
        }, err => {
          this.errorMsg = err;
          this.notificationService.showError(this.errorMsg,'Error',)
          this.loader = false;
        })
      } else {
        //Sign in Method
        this.loader = true;
        this.errExist = false;
        this.myServices.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
          this.loader = false;
          console.log(res);
          this.notificationService.showSuccess("Logged in Successfully !",'Success')
        }, err => {
          this.errorMsg = err;
          this.notificationService.showError( this.errorMsg,'Error')
          this.loader = false;
        })
      }
    }

  }

}
