import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit 
{
  textColor="text-color";
  textBgcolor="text-bgcolor";
  textBkColor="text-bkcolor";
  toggleButtonColor="toggle-color";

  greetingStyle = 
  [
    this.textColor,
    this.textBkColor
  ];
 message: string = "Welcome To Greeting Component";
  constructor() { }

  ngOnInit() 
  {

  }


  sayGreet(event)
  {
    console.log(event);
    this.message = "Good Morning"+" "+event.type+""+event.target;
  
  }
  s1=true;
  s5='orange';
  toggleColor()
  {
    this.s1=!this.s1;
    this.s5=this.s1 ? 'orange':'black'
  }

  
}
