import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  // bgLeft: string = "https://shubhsonidev.github.io/portfolio/assets/img/bg/intro-purple-shadow.png";
  // bgRight: string = "https://shubhsonidev.github.io/portfolio/assets/img/bg/intro-green-shadow.png";
  bgLeft: string = "https://shubhsonidev.github.io/portfolio/assets/img/bg/intro-blue-shadow.png";
  bgRight: string = "https://shubhsonidev.github.io/portfolio/assets/img/bg/intro-darkblue-shadow.png";

  constructor(private scrollService: ScrollService) { }


  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }


}


