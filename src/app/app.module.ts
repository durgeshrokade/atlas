import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { SectionTabComponent } from './section-tab/section-tab.component';
import { SectionsComponent } from './sections/sections.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import {MatSelectModule} from '@angular/material/select';
import { RateStackComponent } from './rate-stack/rate-stack.component';
import { EligibilityLoanTermsComponent } from './eligibility-loan-terms/eligibility-loan-terms.component';
import { CalculatedValuesComponent } from './calculated-values/calculated-values.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SampleDialogComponent,
    HeaderComponent,
    SectionTabComponent,
    SectionsComponent,
    InputFormComponent,
    DisplayFormComponent,
    RateStackComponent,
    EligibilityLoanTermsComponent,
    CalculatedValuesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }