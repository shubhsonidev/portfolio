import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioitems: any = [
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/jewel.png',
      // backgroundImage:
      //   'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/libac.png',
      // gitLink: 'https://github.com/shubhsonidev/linkerly',
      // liveLink: 'https://jewe-billing-backend.vercel.app/',
      backendLink: 'https://jewe-billing-backend.vercel.app/',
      docs: 'https://jewe-billing-backend.vercel.app/',
      title: 'JEWELERA - Jewellery billing backend',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Angular', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/gappemaro.png',
      // backgroundImage:
      //   'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/libac.png',
      // gitLink: 'https://github.com/shubhsonidev/linkerly',
      liveLink: 'https://gappe-maro.netlify.app/login',
      title: 'GappeMaro - Retro Chatting Webapp',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Angular', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/limo.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/libac.png',
      gitLink: 'https://github.com/shubhsonidev/linkerly',
      liveLink: 'https://linkerly.netlify.app/main',
      title: 'Linkerl - Link Shortening Service',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Angular', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/tech.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/tech1.png',
      gitLink: 'https://github.com/shubhsonidev/techshorts',
      liveLink: 'https://techieshorts.netlify.app/',
      title: 'TechShorts - 20 words news',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Javascript', 'React', 'API', 'HTML5', 'CSS'],
    },

    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/ratechecker.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/rate.png',
      gitLink: 'https://github.com/shubhsonidev/rates-webapp/',
      liveLink: 'https://metalrates.netlify.app/',
      title: 'Gold & Silver Rates Webapp',
      // description: 'This Webapp shows Real-Time rates of Gold and Silver. It is purely made for retailers for increasing Customer Relations.',
      tags: ['Javascript', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/portfolio.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/port.png',
      gitLink: 'https://github.com/shubhsonidev/portfolio',
      liveLink: 'https://shubhsonidev.github.io/portfolio/',
      title: 'Portfolio',
      // description: '',
      tags: ['Angular', 'Typescript', 'API', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_webapp.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_00.png',
      // gitLink: '',
      liveLink: 'https://byaj.app/login',
      title: 'Byajbook Webapp',
      // description: '"Byajbook" is a software which manages informal loans.',
      tags: ['Angular', 'Typescript', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_01.png',
      // gitLink: 'https://github.com/christian-hansen/portfolio-website',
      liveLink: 'https://byajbook.com/',
      title: 'Byajbook Website',
      // description: '"Byajbook" is a software which manages informal loans.',
      tags: ['Angular', 'Typescript', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_00.png',
      // gitLink: '',
      liveLink: 'https://fivefilter.com/',
      title: 'FiveFiter eSports Website',
      // description: '"FiveFiter eSports" is an Indian esports performance brand, laser-focused on seeking out, leveling up, and amplifying gamers and creators.',
      tags: ['Angular', 'HTML', 'CSS'],
    },

    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_webapp.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_01.png',
      // gitLink: '',
      liveLink: 'https://fivefilter.com/',
      title: 'ESports Tournament Manager',
      // description: 'This is Discord based SAAS manager which helps eSports in maintaining and organising Tournaments with realtime-results and smooth conduction of tournament.',
      tags: ['Angular', 'Typescript', 'API', 'Discord Bots'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/mahi925_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/mahi925_00.png',
      // gitLink: '',
      // liveLink: '',
      title: 'Mahi925 Silver Website',
      // description: '"Mahi925 Silver" is brand which showcases a wide variety of modern and fashionable Silver jewellery',
      tags: ['Angular', 'HTML', 'CSS'],
    },

    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/scheme.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/scheme_00.png',
      // gitLink: '',
      // liveLink: '',
      title: '11+1 Gold scheme Management',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Javascript', 'Appscript', 'API', 'HTML5', 'CSS'],
    },
  ];
  constructor() {}

  getPortfolio() {
    return this.portfolioitems;
  }
}
