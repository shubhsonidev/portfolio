import { Component } from '@angular/core';
import { ImprintService } from '../services/imprint.service';

import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private scrollService: ScrollService, private imprintService: ImprintService) {
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.closeImprint();
  }

  scrollToSkills(): void {
    window.scrollTo({
      top: 1600,
      behavior: 'smooth',
    });
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
