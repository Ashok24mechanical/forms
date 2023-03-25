import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,ValidationErrors, Validators} from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  ne:FormGroup;
  ngOnInit(): void {
    this.ne= new FormGroup({
      firstname:new FormControl(null,Validators.required),

    });
  }
submit(){
console.log(this.ne)
}
}
