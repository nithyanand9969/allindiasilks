import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentSection: any;
  isNavbarbarContentOpen: any;

  constructor(private elementRef: ElementRef) {}

  openNavbarContent(section: any) {
    this.isNavbarbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavBarContent() {
    this.isNavbarbarContentOpen = false;
  }

  navigateTo(path: any) {
    // Add your navigation logic here
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = this.elementRef.nativeElement.querySelector('.modal-container');
    const openButtons = this.elementRef.nativeElement.querySelectorAll('.open-button');

    let clickedInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickedInsideButton = true;
      }
    });

    if (modalContainer && !clickedInsideButton && this.isNavbarbarContentOpen) {
      this.closeNavBarContent();
    }
  }
}
