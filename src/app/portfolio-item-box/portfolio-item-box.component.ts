import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-portfolio-item-box',
  templateUrl: './portfolio-item-box.component.html',
  styleUrls: ['./portfolio-item-box.component.scss'],
})
export class PortfolioItemBoxComponent implements OnInit {
  @Input() portfolioItem: any;
  @Input() index: any;

  portfolioItems: any = [];

  constructor(
    private portfolioService: PortfolioService,
    private scrollService: ScrollService
  ) {}
  
  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  ngOnInit(): void {
    this.portfolioItems = this.portfolioService.getPortfolio();
  }

  onMouseMove(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  }
}
