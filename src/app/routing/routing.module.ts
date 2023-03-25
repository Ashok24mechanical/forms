import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,RouterModule } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';


const routes : Routes =[
  {path: 'test', component: TestComponent},
  {path:'',component:ReactiveFormComponent},
{path:'', pathMatch:'full', redirectTo:'test'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
