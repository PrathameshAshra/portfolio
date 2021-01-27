import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pa-pricing',
  templateUrl: './pa-pricing.component.html',
  styleUrls: ['./pa-pricing.component.scss']
})
export class PaPricingComponent implements OnInit {
@Input() priceValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
