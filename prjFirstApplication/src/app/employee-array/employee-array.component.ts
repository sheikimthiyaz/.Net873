import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-array',
  templateUrl: './employee-array.component.html',
  styleUrls: ['./employee-array.component.css']
})
export class EmployeeArrayComponent implements OnInit {

  People:any[]=[
    {"name":"imthu","age":25,"dept":"cstg"},
    {"name":"Ravi","age":24,"dept":"Admin"},
    {"name":"Sai","age":27,"dept":"Hr"},
    {"name":"Sam","age":28,"dept":"Fin"}
     ];

  constructor() { }

  ngOnInit(): void {
  }

}
