import { Injectable } from '@angular/core';

export interface SkillCategory {
  category: string;
  skills: string[];
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3 / SCSS',
        'Tailwind CSS',
        'Flutter',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Firebase',
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        'Git & GitHub',
        'Capacitor',
        'Material Design',
        'Redux',
        'App Script',
        'Figma',
      ],
    },
  ];

  constructor() {}

  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }

  // Keep backward compatibility
  getSkills(): any[] {
    return this.skillCategories.flatMap((cat) =>
      cat.skills.map((s) => ({ description: s }))
    );
  }
}
