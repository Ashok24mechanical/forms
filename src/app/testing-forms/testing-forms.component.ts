import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testing-forms',
  templateUrl: './testing-forms.component.html',
  styleUrls: ['./testing-forms.component.css']
})
export class TestingFormsComponent implements OnInit {
data:any;

fname:any;
gender=[
  {id:1,value:'male'},
  {id:2,value:'female'},
  {id:3,value:'others'}
]

de='male';
ah='india';

  constructor() { }

  ngOnInit(): void {
  }
  getdata(form:NgForm){
  this.data =form;
    console.log(form)
  }


}
