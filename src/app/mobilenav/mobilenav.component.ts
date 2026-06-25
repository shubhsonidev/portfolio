import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';



@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
})

export class MobilenavComponent {
@Output() linkClick = new EventEmitter<void>();


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
    this.toggleMobileNav();
    this.closeImprint();
  }

  toggleMobileNav() {
    this.linkClick.emit();
  }

  scrollToContact(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToContact());
  }

  scrollToPortfolio(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToPortfolio());
  }

  scrollToSkills(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToSkills());
  }

  scrollToAbout(): void {
    this.navigateAndScroll(() => this.scrollService.scrollToAbout());
  }

  scrollToTop(): void {
    if (this.router.url === '/' || this.router.url === '') {
      this.scrollService.scrollToTop();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollToTop(), 500);
      });
    }
    this.toggleMobileNav();
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
