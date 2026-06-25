import { Injectable } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  type?: string;
  description?: string;
  skills?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  activities?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      role: 'Tech Team Coordinator',
      company: 'Code4All Club',
      period: 'Jul 2024 – Feb 2025',
      duration: '8 mos',
      description:
        'Coordinated technical initiatives and led development activities within the club, fostering collaboration among student developers.',
    },
    {
      role: 'Graphic Design Coordinator',
      company: 'E-Cell RGPV',
      period: 'Sep 2024 – Nov 2024',
      duration: '3 mos',
      description:
        'Managed visual identity and design assets for the Entrepreneurship Cell at RGPV.',
    },
    {
      role: 'Co-Founder',
      company: 'MAHI925 Silver',
      period: '2022 – 2024',
      duration: '2 yrs',
      description:
        'Co-founded a silver jewellery brand, handling the digital presence, website development, and online sales strategy.',
      skills: ['Angular', 'E-Commerce', 'UI/UX'],
    },
    {
      role: 'Web Developer',
      company: 'ByajBook',
      period: 'Oct 2021 – Dec 2023',
      duration: '2 yrs 3 mos',
      type: 'Full-time',
      description:
        'Built web app and website for a 100X VC-backed fintech startup making credit and finance management simpler. Developed the flagship web platform using Angular.',
      skills: ['Angular', 'Angular Material', 'TypeScript', 'REST APIs'],
    },
    {
      role: 'Development Team Lead',
      company: 'FF Esports',
      period: 'Jul 2023 – Nov 2023',
      duration: '5 mos',
      type: 'Full-time · Remote',
      description:
        'Led development of a comprehensive esports tournament management platform. Integrated advanced Discord bot functionality to automate tournament processes.',
      skills: ['Angular', 'Discord Bots', 'Node.js', 'API Integration'],
    },
  ];

  private education: Education[] = [
    {
      institution: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya',
      degree: 'Bachelor of Engineering — Computer Science',
      period: '2023 – 2027',
    },
    {
      institution: 'Madhya Pradesh Board of Secondary Education',
      degree: '12th — Mathematics & Computer Science',
      period: '2021 – 2023',
      grade: 'A (First Division)',
      activities:
        'Team Leader, contributed to school website design, represented school in musical competition. Winner at Arogya Conference for education management innovation.',
    },
    {
      institution: 'DAV Schools Network',
      degree: '10th — Mathematics, Science & Computer Science',
      period: '2011 – 2021',
      grade: 'CBSE 94%',
      activities:
        'Academic Achievements, participated in musical events, percussionist in school band, winner in sketching competition.',
    },
  ];

  constructor() {}

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getEducation(): Education[] {
    return this.education;
  }
}
