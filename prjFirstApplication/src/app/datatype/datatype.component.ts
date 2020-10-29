import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styleUrls: ['./datatype.component.css']
})
export class DATATYPEComponent implements OnInit {
  Name:string="imthiyaz";
  Age:Number;
  Hobbies:string[];
  Marks:Array<Number>;
  Istrue:Boolean;
  Student:object;
  tupleval:[string,number,Boolean];
  Dynamicvalue:any;
Picture="assets/images/py2.jpg";

  constructor() {
    this.Age=25;
    this.Hobbies=["Tv","Playing"];
    this.Marks=[98,94,89];
    this.Istrue=false;
    this.tupleval=["imthiyaz",25,true];
    this.Student={Fathername:"Basha",City:"RJY"}
    this.Dynamicvalue="HI";
    this.Dynamicvalue=true;

  }
  

  ngOnInit(): void {
  }

}
