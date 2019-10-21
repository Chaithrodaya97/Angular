import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-test',
  templateUrl: './datepicker-test.component.html',
  styleUrls: ['./datepicker-test.component.css']
})
export class DatepickerTestComponent implements OnInit {

  constructor() { }
  date: NgbDate;
  ngOnInit() {
  }

  onSelect(event)
  {
    console.log(event);
    this.date = event;
  }

}
