import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-and-style',
  templateUrl: './class-and-style.component.html',
  styleUrls: ['./class-and-style.component.css']
})
export class ClassAndStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  cls=false
  noClass={
    'color' : 'green'
  }
  mltStyle ={
    'background' :'red',
      'color' : 'blue'
  }
  chngBtn:boolean=true;
  chngTxt:boolean=true;
  changeTxt(){
    this.chngBtn=!this.chngBtn;
  }
  chngName(){
   this.chngTxt=!this.chngTxt
  }
}
