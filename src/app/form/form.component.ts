import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  reactiveform: FormGroup;
  constructor() {
  }
  
  ngOnInit(): void {
    this.form()
    
  }

  form(){
    this.reactiveform = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])

    },this.matchpassword);
  }
  matchpassword(form: FormGroup) {
    const password = form.get('password').value;
    const confirmpassword = form.get('confirmpassword').value;
    return password === confirmpassword ? null : { notmatch: true }

  }
 


  data() {
    console.log(this.reactiveform);
  }

}
