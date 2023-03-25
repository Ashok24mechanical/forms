import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-foem',
  templateUrl: './template-foem.component.html',
  styleUrls: ['./template-foem.component.css']
})
export class TemplateFoemComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  firstname:any;
myform:any={};
  sub(fo:NgForm){
this.myform =fo;
console.log(fo)
  }
}
