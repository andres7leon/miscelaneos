import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <p [appResaltado]="'blue'">
        Hola Mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log('OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit')

  }

  ngOnInit() {
  }

}
