import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
personDetail:any;
  constructor(private myService:MyServicesService) { }

  ngOnInit(): void {


  }
  }

