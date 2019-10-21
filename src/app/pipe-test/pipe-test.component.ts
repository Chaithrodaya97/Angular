import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  name='Chaithrodaya BS';
  date=new Date("1997/11/14");

  constructor() { }

  ngOnInit() {
  }

}
