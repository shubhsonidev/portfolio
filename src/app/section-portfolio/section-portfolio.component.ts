import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
})
export class SectionPortfolioComponent implements OnInit, AfterViewInit, OnDestroy{
  portfolio: any = [];
  @Input() limit: number = 0;
  @Input() showViewAll: boolean = false;
  @ViewChild('portfolioSection', { static: true }) target: ElementRef;
  private subscription: Subscription;

  constructor(private portfolioItemService: PortfolioService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.getPortfolioItems();
  }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToPortfolioSection$.subscribe(() => {
      const elementPosition = this.target.nativeElement.getBoundingClientRect().top + window.scrollY;
      const adjustment = 150;
      window.scrollTo({ top: elementPosition - adjustment, behavior: 'smooth' });
    });
  }
  

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getPortfolioItems() {
    if (this.limit > 0) {
      this.portfolio = this.portfolioItemService.getFeaturedPortfolio();
    } else {
      this.portfolio = this.portfolioItemService.getPortfolio();
    }
  }
}

function getOffset(el: HTMLElement): number {
  let offsetTop = 0;

  while (el) {
    offsetTop += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }

  return offsetTop;
}