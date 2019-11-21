import {Component} from '@angular/core';
import './bots2/add.bot';
import {pipe, from, of} from 'rxjs';
import {filter, map, reduce, scan, tap} from 'rxjs/operators';
import {hasWord} from './components/chat/chat.component';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';
import {botAndy} from './bots/Andy-bot';
import {botDany} from './bots/Dany-bot';
import {botAdder} from './bots/botAdder';
import {botEcho} from './bots/botEcho';

export interface Message {
  from: string;
  message: string;
}

export interface Bot {
  name: string;
  messages: Message[];

  logic();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // from([this.messages]).pipe(
  //   tap(r => console.log(r[0].from)),
  //   filter((allInfoMessage: Message) => allInfoMessage.from !== 'bot'),
  //   tap(r => console.log(r)),
  //   map((allInfoMessage: Message) => allInfoMessage.message),
  //   filter(hasWord('andy'))
  // ).subscribe(r => console.log(r));
  bots: Bot[] = [botAndy, botDany, botAdder, botEcho];
  activeBot: Bot = this.bots[0];

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url.substring(1, event.url.length));
        this.activeBot = this.bots.find(bot => bot.name === event.url.substring(1, event.url.length));
      }
    });
  }

  // enteredMessage: string;

  getEnteredMessage(message: Message) {
    // const bot = this.bots2.find(b => b.name === this.activeBotName);
    // bot.messages.push(message);
    console.log('active');
    this.activeBot.messages.push(message);
    this.activeBot.logic();
  }

  getCurrentBot(bot: Bot) {
    this.activeBot = bot;
  }
}
