import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImprintService } from '../services/imprint.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomSection', { static: true }) target: ElementRef;
  private subscription: Subscription;
  constructor(private scrollService: ScrollService, private imprintService: ImprintService) {}


  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToBottomSection$.subscribe(
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

  openImprint() {
    this.imprintService.openImprint();    
  }
}
