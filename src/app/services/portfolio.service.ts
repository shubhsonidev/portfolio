import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
portfolioitems: any = [
  
  {
    mainImage: "/assets/img/portfolio/byajbook_webapp.png",
    backgroundImage: "/assets/img/portfolio/byajbook_00.png",
    // gitLink: 'https://github.com/christian-hansen/join-app',
    // liveLink: 'https://christian-hansen.developerakademie.net/join/',
    title: 'Byajbook Webapp',
    description: '"Byajbook" is a software which manages informal loans.',
    tags: ['Angular','Typescript', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/fivefilter_website.png",
    backgroundImage: "/assets/img/portfolio/fivefilter_00.png",
    // gitLink: 'https://github.com/christian-hansen/el-pollo-loco',
    // liveLink: 'https://christian-hansen.developerakademie.net/elpolloloco/',
    title: 'FiveFiter eSports Website',
    description: '"FiveFiter eSports" is an Indian esports performance brand, laser-focused on seeking out, leveling up, and amplifying gamers and creators.',
    tags: ['Angular', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/byajbook_website.png",
    backgroundImage: "/assets/img/portfolio/byajbook_01.png",
    // gitLink: 'https://github.com/christian-hansen/portfolio-website',
    // liveLink: 'https://www.christian-hansen.dev',
    title: 'Byajbook Website',
    description: '"Byajbook" is a software which manages informal loans.',
    tags: ['Angular', 'Typescript', 'HTML', 'CSS']
  },
    {
    mainImage: "/assets/img/portfolio/fivefilter_webapp.png",
    backgroundImage: "/assets/img/portfolio/fivefilter_01.png",
    // gitLink: 'https://github.com/christian-hansen/ng-weather',
    // liveLink: 'https://weather.christian-hansen.dev/',
    title: 'eSports Tournament manager',
    description: 'This is Discord based SAAS manager which helps eSports in maintaining and organising Tournaments with realtime-results and smooth conduction of tournament.',
    tags: ['Angular', 'Typescript', 'API', 'Discord Bots']
  },
    {
    mainImage: "/assets/img/portfolio/mahi925_website.png",
    backgroundImage: "/assets/img/portfolio/mahi925_00.png",
    // gitLink: 'https://github.com/christian-hansen/ng-weather',
    // liveLink: 'https://weather.christian-hansen.dev/',
    title: 'Mahi925 Silver Website',
    description: '"Mahi925 Silver" is brand which showcases a wide variety of modern and fashionable Silver jewellery',
    tags: ['Angular', 'HTML', 'CSS']
  },
    {
    mainImage: "/assets/img/portfolio/portfolio.png",
    backgroundImage: "/assets/img/portfolio/port.png",
    // gitLink: 'https://github.com/christian-hansen/ng-weather',
    // liveLink: 'https://weather.christian-hansen.dev/',
    title: 'Portfolio',
    description: '',
    tags: ['Angular', 'Typescript', 'API', 'HTML', 'CSS']
  },
    {
    mainImage: "/assets/img/portfolio/ratechecker.png",
    backgroundImage: "/assets/img/portfolio/rate.png",
    // gitLink: 'https://github.com/christian-hansen/ng-weather',
    // liveLink: 'https://weather.christian-hansen.dev/',
    title: 'GOLD & SILVER RATES WEBAPP',
    description: 'This Webapp shows Real-Time rates of Gold and Silver. It is purely made for retailers for increasing Customer Relations.',
    tags: [ 'Javascript', 'API', 'HTML5', 'CSS']
  },
  // {
  //   mainImage: "/assets/img/portfolio/crm.png",
  //   backgroundImage: "/assets/img/portfolio/simple-crm.png",
  //   gitLink: 'https://github.com/christian-hansen/simple-crm',
  //   liveLink: 'https://github.com/christian-hansen/simple-crm',
  //   title: 'Simple CRM',
  //   description: 'The "Simple CRM" project is currently "work-in-progress" and will be available here soon.',
  //   tags: ['Angular', 'Typescript', 'Firebase', 'HTML', 'CSS', 'Material Design']
  // },
  // {
  //   mainImage: "/assets/img/portfolio/crm.png",
  //   backgroundImage: "/assets/img/portfolio/crm.png",
  //   gitLink: 'https://www.github.com/christian-hansen/',
  //   liveLink: 'https://www.hansen-net.de/projekte',
  //   title: 'Simple CRM TBD',
  //   description: 'Lorem ipsum...',
  //   tags: ['Angular', 'Typescript', 'HTML', 'CSS']
  // }
]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}
