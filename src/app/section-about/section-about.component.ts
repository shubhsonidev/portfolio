import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection', { static: true }) target: ElementRef;
  private subscription: Subscription;
  constructor(private scrollService: ScrollService) {}


  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToAboutSection$.subscribe(
      () => {
        const elementPosition = this.target.nativeElement.offsetTop; // Get the top position of the element
        const adjustment = 150; // Set your adjustment value
        window.scrollTo({
          top: elementPosition - adjustment,
          behavior: 'smooth',
        }); // Scroll to the adjusted position
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
