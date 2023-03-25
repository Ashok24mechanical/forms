import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25),
      Validators.pattern('^[a-z0-9_-]{8,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16),
      Validators.pattern('[A-Za-z0-9@#!?><. _+=]{4,10}')]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      skills: this.fb.array([
        this.fb.group({
          IT_skills: this.fb.control('', Validators.required),
          Interest: this.fb.control('', Validators.required)
        })
      ])
    }, { validator: this.matchpassword });
  }

  addskill() {
    (<FormArray>this.form.get('skills')).push(
      this.fb.group({
        IT_skills: this.fb.control('', Validators.required),
        Interest: this.fb.control('', Validators.required)
      })
    )
  }
  remove(i: number) {
    (<FormArray>this.form.get('skills')).removeAt(i)
  }


  matchpassword(form: FormGroup) {
    const password = form.get('password').value;
    const confirmpassword = form.get('confirmpassword').value;
    return password === confirmpassword ? null : { notmatch: true }
  }
  sub() {
    console.log(this.form);
  }

}
