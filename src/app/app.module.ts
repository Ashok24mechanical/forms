import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoModule } from './fo/fo.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFoemComponent } from './template-foem/template-foem.component';
import { TestingFormsComponent } from './testing-forms/testing-forms.component';
import { LabelFloatingComponent } from './label-floating/label-floating.component';
import { TestComponent } from './test/test.component';
import{RoutingModule} from './routing/routing.module';
import { FormComponent } from './form/form.component';
import { BuilderComponent } from './builder/builder.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateFoemComponent,
    TestingFormsComponent,
    ReactiveFormComponent,
    LabelFloatingComponent,
    TestComponent,
    FormComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
