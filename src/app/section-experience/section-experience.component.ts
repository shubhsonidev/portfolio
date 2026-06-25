import { Component, OnInit } from '@angular/core';
import {
  ExperienceService,
  Experience,
} from '../services/experience.service';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss'],
})
export class SectionExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }
}
