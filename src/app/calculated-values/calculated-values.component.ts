import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculated-values',
  templateUrl: './calculated-values.component.html',
  styleUrls: ['./calculated-values.component.scss']
})
export class CalculatedValuesComponent implements OnInit {
  @Input() isDarkThemeEnabled:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
