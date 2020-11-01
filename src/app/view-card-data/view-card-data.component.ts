import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-card-data',
  templateUrl: './view-card-data.component.html',
  styleUrls: ['./view-card-data.component.css']
})
export class ViewCardDataComponent implements OnInit {

  singleCardData:any=[];
  constructor( private activateRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(res=>{
      console.log(res.name);
   this.singleCardData=res;
    })


  }

}
