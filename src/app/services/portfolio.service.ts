import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioitems: any = [
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_webapp.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_00.png',
      // gitLink: 'https://github.com/christian-hansen/join-app',
      // liveLink: 'https://christian-hansen.developerakademie.net/join/',
      title: 'Byajbook Webapp',
      // description: '"Byajbook" is a software which manages informal loans.',
      tags: ['Angular', 'Typescript', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_00.png',
      // gitLink: 'https://github.com/christian-hansen/el-pollo-loco',
      // liveLink: 'https://christian-hansen.developerakademie.net/elpolloloco/',
      title: 'FiveFiter eSports Website',
      // description: '"FiveFiter eSports" is an Indian esports performance brand, laser-focused on seeking out, leveling up, and amplifying gamers and creators.',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/byajbook_01.png',
      // gitLink: 'https://github.com/christian-hansen/portfolio-website',
      // liveLink: 'https://www.christian-hansen.dev',
      title: 'Byajbook Website',
      // description: '"Byajbook" is a software which manages informal loans.',
      tags: ['Angular', 'Typescript', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_webapp.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/fivefilter_01.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'eSports Tournament manager',
      // description: 'This is Discord based SAAS manager which helps eSports in maintaining and organising Tournaments with realtime-results and smooth conduction of tournament.',
      tags: ['Angular', 'Typescript', 'API', 'Discord Bots'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/mahi925_website.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/mahi925_00.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'Mahi925 Silver Website',
      // description: '"Mahi925 Silver" is brand which showcases a wide variety of modern and fashionable Silver jewellery',
      tags: ['Angular', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/portfolio.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/port.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'Portfolio',
      // description: '',
      tags: ['Angular', 'Typescript', 'API', 'HTML', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/ratechecker.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/rate.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'Gold & Silver Rates Webapp',
      // description: 'This Webapp shows Real-Time rates of Gold and Silver. It is purely made for retailers for increasing Customer Relations.',
      tags: ['Javascript', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/scheme.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/scheme_00.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: '11+1 Gold scheme Management',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Javascript', 'Appscript', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/tech.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/tech1.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'TechShorts',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Javascript', 'React', 'API', 'HTML5', 'CSS'],
    },
    {
      mainImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/limo.png',
      backgroundImage:
        'https://shubhsonidev.github.io/portfolio/assets/img/portfolio/liback.png',
      // gitLink: 'https://github.com/christian-hansen/ng-weather',
      // liveLink: 'https://weather.christian-hansen.dev/',
      title: 'Linkerly',
      // description: 'This Webapp maintains 11+1 scheme which is widely used by gold and silver retailers.',
      tags: ['Angular', 'API', 'HTML5', 'CSS'],
    },
  ];
  constructor() {}

  getPortfolio() {
    return this.portfolioitems;
  }
}
