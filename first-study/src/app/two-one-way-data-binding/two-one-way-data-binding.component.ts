import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-one-way-data-binding',
  templateUrl: './two-one-way-data-binding.component.html',
  styleUrls: ['./two-one-way-data-binding.component.css']
})
export class TwoOneWayDataBindingComponent implements OnInit {
  il:string="İstanbul";
  ilce:string="Merter";
  yazi:string="Gizem Mazı";
  constructor() {
  
  }
    ngOnInit(): void {
    
  }
}
