import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pa-side-nav',
  templateUrl: './pa-side-nav.component.html',
  styleUrls: ['./pa-side-nav.component.scss']
})
export class PaSideNavComponent implements OnInit {
  shareLink = ['../../../assets/github.svg', "../../../assets/icons8-linkedin.svg", "../../../assets/icons8-facebook.svg"]
  currentYear: Number | undefined;

  constructor() { }

  ngOnInit(): void {
    const birthyear = 1997;
    this.currentYear = (new Date().getFullYear() - birthyear);
  }

}
