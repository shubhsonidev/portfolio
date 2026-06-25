import { Injectable } from '@angular/core';

export interface PortfolioItem {
  mainImage: string;
  backgroundImage?: string;
  gitLink?: string;
  liveLink?: string;
  backendLink?: string;
  title: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  contact?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioitems: PortfolioItem[] = [
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/app.jpeg',
      liveLink:
        'https://play.google.com/store/apps/details?id=com.haridarshanjewellers.app&pcampaignid=web_share',
      title: 'APP for Jewellery Retailers',
      description:
        'A cross-platform mobile app tailored for jewellery retailers — published on Google Play Store. Built with Angular and Capacitor for a native-like experience.',
      tags: ['Angular', 'Capacitor', 'TypeScript', 'Mobile'],
      featured: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/docit.png',
      liveLink: 'https://documentit.netlify.app/',
      title: 'DOCIT — No Code Documentation',
      description:
        'A web app that makes creating and sharing documents effortless and interactive. No syntax needed — users focus entirely on content while DOCIT handles formatting.',
      tags: ['Angular', 'TypeScript', 'REST API'],
      featured: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/gappemaro.png',
      liveLink: 'https://gappe-maro.netlify.app/login',
      title: 'GappeMaro — Retro Chat App',
      description:
        'A real-time retro-themed chatting web application with authentication, live messaging, and a nostalgic UI design.',
      tags: ['Angular', 'Node.js', 'WebSocket', 'MongoDB'],
      featured: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/limo.png',
      gitLink: 'https://github.com/shubhsonidev/linkerly',
      liveLink: 'https://linkerly.netlify.app/main',
      title: 'Linkerly — Link Shortener',
      description:
        'A URL shortening service that generates compact, shareable links with click tracking and analytics.',
      tags: ['Angular', 'REST API', 'TypeScript'],
      featured: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_webapp.png',
      liveLink: 'https://byaj.app/login',
      title: 'ByajBook Webapp',
      description:
        'Web platform for a 100X VC-backed fintech startup that simplifies credit and informal loan management for individuals and businesses.',
      tags: ['Angular', 'TypeScript', 'REST API', 'SCSS'],
      featured: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/loyalty.jpeg',
      title: 'Loyalty Management System',
      description:
        'A comprehensive loyalty management platform for gold and silver retailers implementing 11+1 schemes.',
      tags: ['Angular', 'REST API', 'HTML5', 'CSS'],
      contact: true,
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/jewel.png',
      backendLink: 'https://jewe-billing-backend.vercel.app/',
      title: 'JEWELERA — Billing Backend',
      description:
        'A robust backend system for jewellery billing and inventory management, deployed on Vercel.',
      tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/tech.png',
      gitLink: 'https://github.com/shubhsonidev/techshorts',
      liveLink: 'https://techieshorts.netlify.app/',
      title: 'TechShorts — 20 Word News',
      description:
        'A news aggregator that summarizes tech articles into ultra-short 20-word snippets for quick consumption.',
      tags: ['React', 'JavaScript', 'News API'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/ratechecker.png',
      gitLink: 'https://github.com/shubhsonidev/rates-webapp/',
      liveLink: 'https://metalrates.netlify.app/',
      title: 'Gold & Silver Rates',
      description:
        'Real-time gold and silver rate tracker for jewellery retailers to enhance customer relations.',
      tags: ['JavaScript', 'REST API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_website.png',
      liveLink: 'https://byajbook.com/',
      title: 'ByajBook Website',
      description:
        'Marketing and product showcase website for ByajBook — the fintech startup simplifying informal lending.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_website.png',
      liveLink: 'https://fivefilter.com/',
      title: 'FiveFilter eSports Website',
      description:
        'Brand website for an Indian esports performance company focused on discovering and amplifying gamers and creators.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_webapp.png',
      liveLink: 'https://fivefilter.com/',
      title: 'eSports Tournament Manager',
      description:
        'A Discord-integrated SaaS platform for organizing esports tournaments with real-time results and automated workflows.',
      tags: ['Angular', 'TypeScript', 'Discord Bots', 'Node.js'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/mahi925_website.png',
      title: 'Mahi925 Silver Website',
      description:
        'E-commerce showcase website for a silver jewellery brand featuring modern, fashionable designs.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/scheme.png',
      title: '11+1 Gold Scheme Manager',
      description:
        'A web app for managing the popular 11+1 gold savings scheme used by jewellery retailers across India.',
      tags: ['JavaScript', 'App Script', 'REST API'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/portfolio.png',
      gitLink: 'https://github.com/shubhsonidev/portfolio',
      liveLink: 'https://shubhsonidev.github.io/portfolio/',
      title: 'Portfolio Website',
      description:
        'This very portfolio — built with Angular, SCSS, and AOS animations.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
    },
  ];
  constructor() {}

  getPortfolio(): PortfolioItem[] {
    return this.portfolioitems;
  }

  getFeaturedPortfolio(): PortfolioItem[] {
    return this.portfolioitems.filter((item) => item.featured);
  }
}
