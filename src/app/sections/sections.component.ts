import { Component, Input, OnInit } from '@angular/core';
import { data } from '../data/ui-metadata';
import { SingleSectionName, SingleSectionTab } from '../shared/interfaces';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit {
  sections: SingleSectionName[] = [];
  selectedTab: number = 0;
  tabDataToDisplay: SingleSectionTab = {} as SingleSectionTab;
  typesOfLoan: string[] = ["New Loan", "Existing Loan"];
  typeSelected:string = this.typesOfLoan[0];
  atlasId:any;

  @Input()
  isToggled:boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.sections = [
      { key: 'ltr', labelValue: 'LTR' },
      { key: 'bridgeLoan', labelValue: 'Bridge Loan' },
      { key: 'rehab', labelValue: 'Rehab' },
    ];

    this.tabDataToDisplay = this.getTabDataByIndex(0);
  }

  onTabChange(event: number) {
    this.tabDataToDisplay = this.getTabDataByIndex(event);
  }

  getTabDataByIndex(index: number = 0): SingleSectionTab {
    return data[index];
  }

  typeChanged(selectedLoanText: any) {
    this.typeSelected = this.typesOfLoan.find( loan => loan.toLowerCase() === selectedLoanText.value.toLowerCase()) || '';

    if (this.typeSelected === "New Loan") 
      this.atlasId = '';
  }
}
