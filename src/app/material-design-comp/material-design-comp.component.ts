import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-design-comp',
  templateUrl: './material-design-comp.component.html',
  styleUrls: ['./material-design-comp.component.css']
})
export class MaterialDesignCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:any="Clear me"
  clearMe(){
    this.value="";
  }
}
