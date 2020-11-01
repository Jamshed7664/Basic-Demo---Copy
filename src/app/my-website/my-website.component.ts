import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-my-website',
  templateUrl: './my-website.component.html',
  styleUrls: ['./my-website.component.css']
})
export class MyWebsiteComponent implements OnInit{
  allComments:any=[];
  loader:boolean= false;
  productForm:FormGroup;
constructor(private myServices:MyServicesService, private router:Router){}
ngOnInit(): void {
  this.initiatForm()
  this.loader=true;
this.myServices.getAllComents().subscribe(res =>{
    this.allComments=res;
    this.loader=false
  })

}
initiatForm(){
  this.myServices.getData().subscribe(res =>{
    console.log(res);


  })
 this.productForm=new FormGroup({
   'name':new FormControl(null,Validators.required),
   'price':new FormControl(null,Validators.required),
   'maxPrice':new FormControl(null,Validators.required),
   'minPrice':new FormControl(null,Validators.required),
 })
}
getCardData(item){
  this.router.navigate(['/viewData',item])
  console.log(item);

}
onSubmit(){
  if(this.productForm.invalid){
    this.productForm.controls['name'].markAsTouched();
    this.productForm.controls['price'].markAsTouched();
    this.productForm.controls['maxPrice'].markAsTouched();
    this.productForm.controls['minPrice'].markAsTouched();
  }else{
   this.myServices.onSubmit(this.productForm.value).subscribe(res =>{
     console.log(res);

   },err =>{
     console.log(err);

   })
    console.log(this.productForm.value);
  }

}
}
