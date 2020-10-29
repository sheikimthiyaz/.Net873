import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-array',
  templateUrl: './student-array.component.html',
  styleUrls: ['./student-array.component.css']
})
export class StudentArrayComponent implements OnInit {
  

    student:any[]=[
    {"name":"imthu","id":25,"Iscleared":true,Image:"assets/images/stu1.jpg"},
    {"name":"Ravi","id":24,"Iscleared":false,Image:"assets/images/stu2.jpg"},
    {"name":"Sai","id":27,"Iscleared":false,Image:"assets/images/stu3.jpg"},
    {"name":"Sam","id":26,"Iscleared":true,Image:"assets/images/stu4.jpg"}
     ];

  constructor() { }

  ngOnInit(): void {
  }

}
