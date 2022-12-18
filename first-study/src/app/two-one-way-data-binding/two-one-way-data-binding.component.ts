import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-one-way-data-binding',
  templateUrl: './two-one-way-data-binding.component.html',
  styleUrls: ['./two-one-way-data-binding.component.css']
})
export class TwoOneWayDataBindingComponent implements OnInit {
  yazi:string="yazımı ekledim";
  name:string="yazını yaz";
  constructor() {
  
  }
    ngOnInit(): void {
    
  }
}
