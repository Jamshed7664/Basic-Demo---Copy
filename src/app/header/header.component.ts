import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
userSub:Subscription;
isAuthenticated:boolean=false;
  constructor(private myservce:MyServicesService) { }
  exclusive:string;
  ngOnInit(): void {
this.myservce.mySubject.subscribe(res =>{
  this.exclusive=res;

})
//  this.userSub=this.myService.user.subscribe(auth =>{
//     if(auth){
//      this.isAuthenticated=true;
//    }

//  })
  }


ngOnDestroy(){
  this.myservce.mySubject.unsubscribe()
  // this.myService.exclusiveubj.unsubscribe()
}
}
