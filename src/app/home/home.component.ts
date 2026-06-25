import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToBottom(): void {
    this.scrollService.scrollToBottom();
  }
}
