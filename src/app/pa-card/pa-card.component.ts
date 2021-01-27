import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pa-card',
  templateUrl: './pa-card.component.html',
  styleUrls: ['./pa-card.component.scss']
})
export class PaCardComponent implements OnInit {
  @Input() cardValue: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardValue)
  }

}
