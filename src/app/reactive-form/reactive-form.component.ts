import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  rh : FormGroup;


  ngOnInit(): void {
    this.rh = new FormGroup({
      firstname: new FormControl(null, [Validators.required, this.sp]),
      lostname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      con: new FormGroup({
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  sp(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { sp: true }
    }
    return null
  }

  add() {
    (<FormArray>this.rh.get('skills')).push(new FormControl(null, Validators.required))
  }

  remove() {
  
  }

  sub() {
    console.log(this.rh)
  }
}
