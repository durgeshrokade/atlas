import { Component, EventEmitter, HostBinding, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleEmitter = new EventEmitter();

  @Output()
  themeToggleEmitter = new EventEmitter();

  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  showArrow: boolean = false;

  constructor(private overlay: OverlayContainer, @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.renderer.setAttribute(this.document.body, 'class', 'darkMode');
        this.overlay.getContainerElement().classList.add(darkClassName);
        this.themeToggleEmitter.emit("");
      } else {
        this.renderer.removeAttribute(this.document.body, 'class');
        this.overlay.getContainerElement().classList.remove(darkClassName);
        this.themeToggleEmitter.emit("");
      }
    });
  }

  toggleSideNav() {
    this.toggleEmitter.emit("");
    this.showArrow = !this.showArrow;
  }

}
