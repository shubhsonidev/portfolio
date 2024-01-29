import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Data } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { SkillsService } from '../services/skills.service';


@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss'],
})
export class SectionSkillsComponent implements AfterViewInit, OnDestroy, OnInit {
  skills: any = [];
  @ViewChild('skillsSection', { static: true }) target: ElementRef;
  private subscription: Subscription;

  constructor(
    private skillService: SkillsService,
    private scrollService: ScrollService
  ) {
    
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToSkillsSection$.subscribe(
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

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillService.getSkills();
  }
}
