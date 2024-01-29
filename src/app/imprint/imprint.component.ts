import { Component, EventEmitter, Output } from '@angular/core';
import { ImprintService } from '../services/imprint.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
@Output() closeImprint: EventEmitter<any> = new EventEmitter;

constructor(private imprintService: ImprintService,) {}

  closeImprintWindow() {
    this.imprintService.shutdownImprint();
  }
}
