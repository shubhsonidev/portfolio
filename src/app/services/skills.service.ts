import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: any = [
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/angular-big.png',
      description: 'Angular',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/react.png',
      description: 'React',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/typescript-big.png',
      description: 'Typescript',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/javascript-big.png',
      description: 'Javascript',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/html5-big.png',
      description: 'HTML5',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/api-big.png',
      description: 'API',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/css-big.png',
      description: 'CSS',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/material-design-big.png',
      description: 'Material Design',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/git.png',
      description: 'GIT',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/flu.png',
      description: 'Flutter',
    },
    {
      logo: 'https://shubhsonidev.github.io/portfolio/assets/img/icons/appscript.png',
      description: 'App Script',
    },
  ];

  constructor() {}

  getSkills() {
    return this.skills;
  }
}
