import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype2',
  templateUrl: './datatype2.component.html',
  styleUrls: ['./datatype2.component.css']
})
export class Datatype2Component implements OnInit {

  Name:string="imthiyaz";
  Age:Number;
  Hobbies:string[];
  Marks:Array<Number>;
  Istrue:Boolean;
  Student:object;
  tupleval:[string,number,Boolean];
  Dynamicvalue:any;

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
