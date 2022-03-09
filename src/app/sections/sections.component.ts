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

  @Input()
  isDarkThemeEnabled: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    this.sections = [
      { key: 'ltr', labelValue: 'LTR' },
      { key: 'bridgeLoan', labelValue: 'Bridge Loan' },
      { key: 'fixAndFlip', labelValue: 'Fix & Flip' },
    ];

    this.tabDataToDisplay = this.getTabDataByIndex(0);
  }

  onTabChange(event: number) {
    this.tabDataToDisplay = this.getTabDataByIndex(event);
  }

  getTabDataByIndex(index: number = 0): SingleSectionTab {
    return data[index];
  }
}
