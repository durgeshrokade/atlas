import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-loan-terms',
  templateUrl: './eligibility-loan-terms.component.html',
  styleUrls: ['./eligibility-loan-terms.component.scss'],
})
export class EligibilityLoanTermsComponent implements OnInit {

  tabsToShow: string[] = ['Eligibility', 'Messages'];
  dataToLoad: any = [];
  messageToLoad: any = [];
  dataToLoadTab2: any = [];
  selectedTabIndex: number = 0;
  displayedColumns: string[] = ["range", "purchase", "rateTerm", "cashout"];
  displayedColumnsTab2: string[] = ["message"];

  constructor() {}

  ngOnInit(): void {
    this.dataToLoad.push(
      {
        range: '740-850',
        purchase: '80%',
        rateTerm: '80%',
        cashout: '75%',
      },
      {
        range: '720-739',
        purchase: '80%',
        rateTerm: '80%',
        cashout: '75%',
      },
      {
        range: '700-750',
        purchase: '80%',
        rateTerm: '80%',
        cashout: '75%',
      },
      {
        range: '640-650',
        purchase: '70%',
        rateTerm: '70%',
        cashout: '75%',
      },
      {
        range: '540-650',
        purchase: '80%',
        rateTerm: '80%',
        cashout: '75%',
      },
      {
        range: '440-550',
        purchase: '70%',
        rateTerm: '60%',
        cashout: '75%',
      },
      {
        range: '440-450',
        purchase: '80%',
        rateTerm: '80%',
        cashout: '75%',
      },
      {
        range: 'Foriegn National',
        purchase: '60%',
        rateTerm: '60%',
        cashout: '65%',
      }
    );
    this.messageToLoad.push(
      "FICO Score Should Be More Than 600",
      "FICO-2 Score Should Be More Than 600"
    );

    this.dataToLoadTab2.push(
      {
        message: "Credit Score is below the minimum for this product"
      },
      {
        message: "DSCR is less than minimum allowed for all rates"
      },
      {
        message: "Everything looks good."
      }
    );
    
  }

  onTabChange(tabValue: number) {
    this.selectedTabIndex = tabValue;
  }
}
