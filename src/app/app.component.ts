import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isToggled: boolean = false;
  isDarkThemeChosen: boolean = false;

  toggleControl = new FormControl(false);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isToggled = !this.isToggled;
  }

  onThemeToggle() {
    this.isDarkThemeChosen = !this.isDarkThemeChosen;
  }
}
