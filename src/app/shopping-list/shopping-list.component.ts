import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  constructor(private myService:MyServicesService) { }
val=false;
  ngOnInit(): void {
  }
ngOnDestroy(){
  this.myService.mySubject.unsubscribe()
}
sendData(name){
  this.myService.mySubject.next(name)
console.log('name is',name);

}
}
