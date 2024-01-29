import { Component, Output, EventEmitter } from '@angular/core';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';



@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})

export class MobilenavComponent {
@Output() linkClick = new EventEmitter<void>();


  constructor(private scrollService: ScrollService, private imprintService: ImprintService) {}


  toggleMobileNav() {
    this.linkClick.emit();
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToSkills(): void {
    // this.scrollService.scrollToSkills();
    window.scrollTo({
      top: 1980,
      behavior: 'smooth',
    });
    this.toggleMobileNav();
    // this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  openImprint() {
    this.toggleMobileNav();
    this.imprintService.openImprint();    
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
