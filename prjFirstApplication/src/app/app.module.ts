import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Datatype2Component } from './datatype2/datatype2.component';
import { DATATYPEComponent } from './datatype/datatype.component';
import { EmployeeArrayComponent } from './employee-array/employee-array.component';
import { StudentArrayComponent } from './student-array/student-array.component';

@NgModule({
  declarations: [
    AppComponent,
    Datatype2Component,
    DATATYPEComponent,
    EmployeeArrayComponent,
    StudentArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
