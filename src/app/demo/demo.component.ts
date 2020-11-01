import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  loginform: FormGroup;
  availDetail: boolean = false;
  process: boolean = false;
  userdetail: any;
  constructor(private fb: FormBuilder,
    private myServices: MyServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inititiateform()
    // this.getValue()
  }

  inititiateform() {
    this.loginform = this.fb.group({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  onSubmit() {
    if (this.loginform.invalid) {
      this.loginform.controls['email'].markAllAsTouched();
      this.loginform.controls['password'].markAllAsTouched();
    } else {
      this.process = true;
      this.myServices.loginuser(this.loginform.value).subscribe(res => {
        console.log(res);
        this.process = false;
        this.userdetail = res;
        swal({
          title: 'logged in',
          text: 'logged in successfully',
          icon: 'success',
          timer: 3000
        }).then(loggedin => {
          if (!loggedin) {
            this.availDetail = true
          }
        })

      }, err => {
        this.process = false;
        console.log(err);
        if (err.error.errors) {
          swal({
            text: 'You have entered invalid Email/Password',
            buttons: [false],
            icon: 'error',
            timer: 3000,
            closeOnClickOutside: false
          })
        }
        if (err.status == 0) {
          swal({
            text: 'No Internet Connection',
            buttons: [false],
            icon: 'error',
            timer: 2000,
            closeOnClickOutside: false
          })
        }
      })
    }
  }

  gotologin() {
    this.availDetail = false;
  }
  obj = [{
    "gm1": [
      {
        "manager1": [
          {
            "lead1": [
              {
                "emp1": {
                  "name": "c",
                  "type": "emp"
                }
              },
              {
                "emp2": {
                  "name": "d",
                  "type": "emp"
                }
              }
            ],
            "name": "b",
            "type": "lead"
          }
        ],
        "name": "a",
        "type": "manager"
      },
      {
        "lead2": [
          {
            "emp1": {
              "name": "e",
              "type": "emp"
            }
          }
        ],
        "name": "f",
        "type": "lead"
      }
    ],
    "name": "g",
    "type": "gm"
  }]
  exp1: any = false;
  exp2: any = false;
  exp3: any = false;
  exp4: any = false;
  parentMark:any='+'
  childMark:any='+'
  parentFunction():void {
    this.parentMark='-'
    this.exp4=false; //if again click on mamager or lead
    this.exp2=false; //if again click on mamager or lead
    this.exp3=false; //if again click on mamager or lead
    this.exp1 = !this.exp1; //hide and show if click on gm
    if(this.exp1){
      this.parentMark='-'
    }else{
      this.parentMark='+'
    }
  }
  childFunction1(name):void{ // function to show and hide manager and lead
    if(name=='manager'){
      this.exp2=!this.exp2;
      this.exp4=false;
    }else{
     this.exp3=!this.exp3
    }
  }
  childFunction2():void{
this.exp4=!this.exp4
  }

}
