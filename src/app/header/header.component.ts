import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private scrollService: ScrollService,
    private imprintService: ImprintService,
    private router: Router
  ) {}

  private navigateAndScroll(scrollFn: () => void): void {
    if (this.router.url === '/' || this.router.url === '') {
      scrollFn();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => scrollFn(), 500);
      });
    }
    this.closeImprint();
  }

  scrollToContact(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToContact());
  }

  scrollToPortfolio(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToPortfolio());
  }

  scrollToAbout(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToAbout());
  }

  scrollToSkills(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToSkills());
  }

  scrollToTop(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.scrollService.scrollToTop();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollToTop(), 500);
      });
    }
    this.closeImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
