import { Component, OnInit } from '@angular/core';
import { ImprintService } from './services/imprint.service';
import { ScrollService } from './services/scroll.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
showImprint: boolean;
shutImprint: boolean;


constructor (private scrollService: ScrollService, private imprintService: ImprintService) {

}

ngOnInit(): void {
  AOS.init();
  this.imprintService.showImprint.subscribe((value) => {
    this.showImprint = value;
  });
  this.imprintService.shutImprint.subscribe((value) => {
    this.shutImprint = value;
  });
}

scrollToBottom(): void {
  this.scrollService.scrollToBottom();
}
}
