import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'blank' | 'error' | 'header';
  visible: boolean;
}

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('terminalInput') terminalInput!: ElementRef<HTMLInputElement>;
  @ViewChild('terminalBody') terminalBody!: ElementRef<HTMLDivElement>;

  titles: string[] = [
    'Fullstack Developer',
    'MERN Stack Dev',
    "Not your Normal Developer",

  ];
  currentTitle: string = this.titles[0];
  titleFading = false;
  private titleIndex = 0;
  private titleInterval: any;

  // Interactive terminal
  terminalLines: TerminalLine[] = [];
  currentInput = '';
  isTerminalReady = false;
  commandHistory: string[] = [];
  private historyIndex = -1;
  private shouldScroll = false;

  private commands: { [key: string]: () => TerminalLine[] } = {
    'help': () => [
      { text: '  Available commands:', type: 'header', visible: true },
      { text: '  whoami          → Who am I', type: 'output', visible: true },
      { text: '  ls.skills       → My tech stack', type: 'output', visible: true },
      { text: '  ls.experience   → Work experience', type: 'output', visible: true },
      { text: '  ls.education    → Education background', type: 'output', visible: true },
      { text: '  contact         → How to reach me', type: 'output', visible: true },
      { text: '  clear           → Clear terminal', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
    ],
    'whoami': () => [
      { text: '  ┌─────────────────────────────────────┐', type: 'header', visible: true },
      { text: '  │  👤  Shubh Soni                     │', type: 'header', visible: true },
      { text: '  └─────────────────────────────────────┘', type: 'header', visible: true },
      { text: '', type: 'blank', visible: true },

      { text: '  Fullstack Developer based in India.', type: 'output', visible: true },
      { text: '  Building web and mobile applications', type: 'output', visible: true },
      { text: '  that solve real-world problems.', type: 'output', visible: true },

      { text: '', type: 'blank', visible: true },

      { text: '  Previously worked at ByajBook,', type: 'output', visible: true },
      { text: '  contributing to fintech products', type: 'output', visible: true },
      { text: '  used by 350,000+ users.', type: 'output', visible: true },

      { text: '', type: 'blank', visible: true },

      { text: '  Experienced in building business', type: 'output', visible: true },
      { text: '  management platforms.', type: 'output', visible: true },
      { text: '  Created Play Store application that', type: 'output', visible: true },
      { text: '  is actively used by real users daily.', type: 'output', visible: true },

      { text: '', type: 'blank', visible: true },
    ],
    'ls.skills': () => [
      { text: '  ── Frontend ──────────────────────────', type: 'header', visible: true },
      { text: '  Angular · React · TypeScript · JavaScript', type: 'output', visible: true },
      { text: '  HTML5 · CSS3 · SCSS · Tailwind CSS · Flutter', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  ── Backend ───────────────────────────', type: 'header', visible: true },
      { text: '  Node.js · Express.js · MongoDB', type: 'output', visible: true },
      { text: '  REST APIs · Firebase', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  ── Tools & Others ────────────────────', type: 'header', visible: true },
      { text: '  Git · GitHub · Capacitor · Material Design', type: 'output', visible: true },
      { text: '  Redux · Google Apps Script · Figma', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
    ],
    'ls.experience': () => [
      { text: '  ┌─────────────────────────────────────┐', type: 'header', visible: true },
      { text: '  │  💼  Work Experience                 │', type: 'header', visible: true },
      { text: '  └─────────────────────────────────────┘', type: 'header', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Web Developer · ByajBook', type: 'header', visible: true },
      { text: '  Oct 2021 – Dec 2023 · 2 yrs 3 mos · Full-time', type: 'output', visible: true },
      { text: '  Built flagship web platform for 100X VC-backed', type: 'output', visible: true },
      { text: '  fintech startup using Angular.', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Co-Founder · MAHI925 Silver', type: 'header', visible: true },
      { text: '  2022 – Now', type: 'output', visible: true },
      { text: '  Silver jewellery brand — website, digital', type: 'output', visible: true },
      { text: '  presence & online sales strategy.', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Dev Team Lead · FF Esports', type: 'header', visible: true },
      { text: '  Jul 2023 – Nov 2023 · 5 mos · Remote', type: 'output', visible: true },
      { text: '  Esports tournament platform with Discord', type: 'output', visible: true },
      { text: '  bot automation.', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Tech Team Coordinator · Code4All Club', type: 'header', visible: true },
      { text: '  Jul 2024 – Feb 2025 · 8 mos', type: 'output', visible: true },
      { text: '  Led development activities & collaboration', type: 'output', visible: true },
      { text: '  among student developers.', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Graphic Design Coordinator · E-Cell RGPV', type: 'header', visible: true },
      { text: '  Sep 2024 – Nov 2024 · 3 mos', type: 'output', visible: true },
      { text: '  Visual identity & design for  E-Cell of RGPV.', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
    ],
    'ls.education': () => [
      { text: '  ┌─────────────────────────────────────┐', type: 'header', visible: true },
      { text: '  │  🎓  Education                      │', type: 'header', visible: true },
      { text: '  └─────────────────────────────────────┘', type: 'header', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Rajiv Gandhi Technical University', type: 'header', visible: true },
      { text: '  B.E. — Computer Science · 2023 – 2027', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  MP Board of Secondary Education', type: 'header', visible: true },
      { text: '  12th - Grade: A (First Division)  ', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Central Board of Secondary Education', type: 'header', visible: true },
      { text: '  10th - Grade: 94%', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
    ],
    'contact': () => [
      { text: '  ┌─────────────────────────────────────┐', type: 'header', visible: true },
      { text: '  │  📬  Get in Touch                   │', type: 'header', visible: true },
      { text: '  └─────────────────────────────────────┘', type: 'header', visible: true },
      { text: '', type: 'blank', visible: true },
      { text: '  Email    → shubhsoni.dev@gmail.com', type: 'output', visible: true },
      { text: '  GitHub   → github.com/shubhsonidev', type: 'output', visible: true },
      { text: '  LinkedIn → linkedin.com/in/shubhsoni-dev', type: 'output', visible: true },
      { text: '', type: 'blank', visible: true },
    ],
  };

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    // Title cycling
    this.titleInterval = setInterval(() => {
      this.titleFading = true;
      setTimeout(() => {
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.currentTitle = this.titles[this.titleIndex];
        this.titleFading = false;
      }, 300);
    }, 3000);

    // Initial terminal animation — show whoami then become interactive
    this.runBootSequence();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollTerminalToBottom();
      this.shouldScroll = false;
    }
  }

  private runBootSequence(): void {
    const bootLines: TerminalLine[] = [
      { text: '$ whoami', type: 'command', visible: false },
      { text: '  Shubh Soni — Fullstack Developer', type: 'output', visible: false },
      { text: '', type: 'blank', visible: false },
      { text: '$ cat welcome.txt', type: 'command', visible: false },
      { text: '  Welcome to my portfolio! Type "help" for commands.', type: 'output', visible: false },
      { text: '', type: 'blank', visible: false },
    ];

    this.terminalLines = bootLines;

    bootLines.forEach((line, i) => {
      setTimeout(() => {
        line.visible = true;
        this.shouldScroll = true;
        if (i === bootLines.length - 1) {
          setTimeout(() => {
            this.isTerminalReady = true;
            setTimeout(() => this.focusInput(), 100);
          }, 300);
        }
      }, 600 + i * 350);
    });
  }

  executeCommand(event?: Event): void {
    if (event) event.preventDefault();

    const input = this.currentInput.trim().toLowerCase();
    this.currentInput = '';

    // Add the command line
    this.terminalLines.push({
      text: `$ ${input || ''}`,
      type: 'command',
      visible: true,
    });

    if (input === '') {
      // Empty command — just show new prompt
      this.shouldScroll = true;
      return;
    }

    // Store in history
    this.commandHistory.unshift(input);
    this.historyIndex = -1;

    if (input === 'clear') {
      this.terminalLines = [
        { text: '$ whoami', type: 'command', visible: true },
        { text: '  Shubh Soni — Fullstack Developer', type: 'output', visible: true },
        { text: '', type: 'blank', visible: true },
        { text: '$ cat welcome.txt', type: 'command', visible: true },
        { text: '  Welcome to my portfolio! Type "help" for commands.', type: 'output', visible: true },
        { text: '', type: 'blank', visible: true },
      ];
      this.shouldScroll = true;
      return;
    }

    const handler = this.commands[input];
    if (handler) {
      const outputLines = handler();
      this.terminalLines.push(...outputLines);
    } else {
      this.terminalLines.push({
        text: `  command not found: ${input}. Type "help" for available commands.`,
        type: 'error',
        visible: true,
      });
      this.terminalLines.push({ text: '', type: 'blank', visible: true });
    }

    this.shouldScroll = true;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.commandHistory.length > 0 && this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++;
        this.currentInput = this.commandHistory[this.historyIndex];
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.currentInput = this.commandHistory[this.historyIndex];
      } else {
        this.historyIndex = -1;
        this.currentInput = '';
      }
    }
  }

  focusInput(): void {
    if (this.terminalInput) {
      this.terminalInput.nativeElement.focus();
    }
  }

  private scrollTerminalToBottom(): void {
    if (this.terminalBody) {
      const el = this.terminalBody.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  ngOnDestroy(): void {
    if (this.titleInterval) {
      clearInterval(this.titleInterval);
    }
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
  }
}
