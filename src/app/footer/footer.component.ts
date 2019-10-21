import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<h5>&copy; Zensar Online Shoppee</h5>
             <h6>All Rights Reserved</h6>`,
  styles: ['h5{color:blue;}','h6{background-color:red;}'] 
            
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
