import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1, transform: 'translate(0%)'})),
      state('false', style({ opacity: 0, transform: 'translate(100%)'})),
      transition('* <=> *', [animate('500ms ease-in-out')])
    ])
  ]
})

export class HeaderMobileComponent {
  displayMobileNav = false;
  iconMenu: string = 'https://shubhsonidev.github.io/portfolio/assets/img/icons/mobile-menu.png';
  iconClose: string = 'https://shubhsonidev.github.io/portfolio/assets/img/icons/mobilemenu-close-final.png';
  iconHeader: any = this.iconMenu;

  constructor(
    private scrollService: ScrollService,
    private imprintService: ImprintService,
    private router: Router
  ) {}

  toggleMobileNav() {
    this.displayMobileNav = !this.displayMobileNav;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;
  }

  closeMobileNav () {
    this.displayMobileNav = false;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;

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
